
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr"; // the locale you want
registerLocale("fr", fr); // register it with the name you want


import { useForm } from "react-hook-form";

const ProjectForm = ({ onSubmit }) => {

    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <div className="form-group">
                <label htmlFor="titre">Titre</label>
                <input
                    ref={register}
                    name="titre"
                    type="text"
                    className="form-control"
                    id="titre" />
            </div>

            <div className="form-group">
                <label htmlFor="technos">Technos</label>
                <input
                    ref={register}
                    name="technos"
                    type="text"
                    className="form-control"
                    id="technos" />
            </div>

            <div className="form-group">
                <label htmlFor="lien">Lien</label>
                <input
                    ref={register}
                    name="lien"
                    type="text"
                    className="form-control"
                    id="lien" />
            </div>

            <div className="form-group">
                <label htmlFor="vignette">Vignette</label>
                <input
                    ref={register}
                    name="jobTitle"
                    type="vignette"
                    className="form-control"
                    id="vignette" />
            </div>

            <div className="form-group">
                <label htmlFor="descriptif">Descriptif</label>
                <textarea
                    ref={register}
                    name="descriptif"
                    rows="3"
                    type="text"
                    className="form-control"
                    id="descriptif">
                </textarea>
            </div>

            <div className="form-group">
                <label htmlFor="street">Start Date</label>
                <div>
                    <DatePicker dateFormat="dd/MM/yyyy" locale="fr" selected={new Date()} onChange={() => { }} />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="street">End Date</label>
                <div>
                    <DatePicker dateFormat="dd/MM/yyyy" locale="fr" selected={new Date()} onChange={() => { }} />
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-primary">Create
            </button>
        </form >
    )
}

export default ProjectForm
