const Course = require('../models/Course');

class CourseController {

    //[Get] /courses/:slug
    show(req, res, next) {
        Course.findOne({slug : req.params.slug}) //slug = :slug trong route-courses.js
            .lean()
            .then(course => {
                res.render('courses/show', { course })
            })
            .catch(next)
    }
}

//find() : lấy ra một danh sách các document
//findOne() : tìm 1 bản ghi find one document

module.exports = new CourseController();
