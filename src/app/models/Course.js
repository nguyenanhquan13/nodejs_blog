const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    descrription: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
//mongoose.model('ModelName', mySchema);
//modelname: mongo tự đọc convert thành dạng snake_case, có nhiều từ cách nhau = gạch dưới,\
// sau đó thêm dạng số nhiều để suy ra connection
