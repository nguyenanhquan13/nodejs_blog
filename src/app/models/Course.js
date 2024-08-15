const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required : true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique : true },
    videoId: { type: String, required : true },
    level: { type: String }
},{
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
//mongoose.model('ModelName', mySchema);
//modelname: mongo tự đọc convert thành dạng snake_case, có nhiều từ cách nhau = gạch dưới,\
// sau đó thêm dạng số nhiều để suy ra connection
