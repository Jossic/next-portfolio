import React from 'react'

const ProjectForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="titre">Titre</label>
                <input
                    name="titre"
                    type="text"
                    className="form-control"
                    id="titre" />
            </div>

            <div className="form-group">
                <label htmlFor="technos">Technos</label>
                <input
                    name="technos"
                    type="text"
                    className="form-control"
                    id="technos" />
            </div>

            <div className="form-group">
                <label htmlFor="lien">Lien</label>
                <input
                    name="lien"
                    type="text"
                    className="form-control"
                    id="lien" />
            </div>

            <div className="form-group">
                <label htmlFor="vignette">Vignette</label>
                <input
                    name="jobTitle"
                    type="vignette"
                    className="form-control"
                    id="vignette" />
            </div>

            <div className="form-group">
                <label htmlFor="descriptif">Descriptif</label>
                <textarea
                    name="descriptif"
                    rows="3"
                    type="text"
                    className="form-control"
                    id="descriptif">
                </textarea>
            </div>

            <button
                type="submit"
                className="btn btn-primary">Create
            </button>
        </form>
    )
}

export default ProjectForm
