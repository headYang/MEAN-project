import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Issue = new Schema({
    title: {
        type: String,
        default: ''
    },
    responsible: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    severity: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: 'Open'
    }
});

export default mongoose.model('Issue', Issue);