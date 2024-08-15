const Course = require('../models/Course');

class CourseController {
    //[Get] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }) //slug = :slug trong route-courses.js
            .lean()
            .then((course) => {
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    //[Get] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    //[Get] /courses/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) =>
                res.render('courses/edit', {
                    course: course,
                }),
            )
            .catch(next);
    }

    //[Put] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id : req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            //redirect tạo header location, khi nó trả về qua response trình duyệt sẽ tự hiểu và điều hướng đến part
            //thêm 1 key là location vào response header của http
            .catch(next)
        }
}

//find() : lấy ra một danh sách các document
//findOne() : tìm 1 bản ghi find one document

module.exports = new CourseController();
