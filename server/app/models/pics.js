var Mongoose = require('mongoose'),
Schema = Mongoose.Schema;

var PictureSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String},
    pictureDate: { type: Date, default: new Date() },
    imageFile: {
        fileName: { type: String},
        originalName: { type: String},
        dateUploaded: {type: Date, default: Date.now}
    }
});

module.exports = Mongoose.model("Picture", PictureSchema);