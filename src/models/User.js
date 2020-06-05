const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// const userSchema = new mongoose.Schema({
//     version: {
//         type: Number,
//         required: true
//     },
//     name: {
//         type: String
//     },
//     releaseDate: {
//         type: Date,
//         required: true
//     }
// });

mongoose.model('User', userSchema);
//mongoose.model('Android', userSchema);
