const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    en: { type: String, unique: true, trim: true, minlength: 1 },
    vn: { type: String, trim: true, minlength: 1 }
});

const Word = mongoose.model('words', WordSchema);

mongoose.connect('mongodb://localhost/mean1808', { useMongoClient: true });

module.exports = Word;

// Word.insertMany([
//         { en: 'action', vn: 'hành động' },
//         { en: 'actor', vn: 'diễn viên' },
//         { en: 'activity', vn: 'hoạt động' },
//         { en: 'active', vn: 'chủ động' },
//         { en: 'bath', vn: 'tắm' },
//         { en: 'bedroom', vn: 'phòng ngủ' }
// ]);
