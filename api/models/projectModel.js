import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    titre: {
        type: String,
        require: true
    },
    descriptif: {
        type: String,
        require: true
    },
    technos: {
        type: Array,
        require: true
    },
    lien: {
        type: String,
        require: true
    },
    vignette: {
        type: String,
        require: true
    },
})

const Project = mongoose.model('Project', projectSchema);

export default Project;