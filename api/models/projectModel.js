import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    descriptif: {
        type: String,
        required: true
    },
    technos: {
        type: Array,
        required: false
    },
    lien: {
        type: String,
        required: true
    },
    vignette: {
        type: String,
        required: true
    },
    ajoutLe: {
        type: Date,
        default: Date.now
    }
})

const Project = mongoose.model('Project', projectSchema);

export default Project;