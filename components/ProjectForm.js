
import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr"; // the locale you want
registerLocale("fr", fr); // register it with the name you want


import { useForm } from "react-hook-form";

const ProjectForm = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        register({ name: 'startDate' });
        register({ name: 'endDate' });
    }, [register])


    const handleDateChange = (dateType, setDate) => (date) => {
        setValue(dateType, date)
        setDate(date)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    name="vignette"
                    type="text"
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
                <label htmlFor="street">Date de début</label>
                <div>
                    <DatePicker
                        ref={register}
                        name="startDate"
                        dateFormat="dd/MM/yyyy"
                        locale="fr"
                        selected={startDate}
                        onChange={handleDateChange('startDate', setStartDate)}

                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="street">Date de fin</label>
                <div>
                    <DatePicker
                        disabled={!endDate}
                        ref={register}
                        name="endDate"
                        dateFormat="dd/MM/yyyy"
                        locale="fr"
                        selected={endDate}
                        onChange={handleDateChange('endDate', setEndDate)}
                    />
                </div>
            </div>

            <div className="form-group">
                {endDate &&
                    <button
                        type='button'
                        className='btn btn-warning'
                        onClick={() => handleDateChange('endDate', setEndDate)(null)}>
                        En cours
                </button>
                }
                {!endDate &&
                    <button
                        type='button'
                        className='btn btn-success'
                        onClick={() => handleDateChange('endDate', setEndDate)(new Date)}>
                        Mettre une fin
                </button>
                }

            </div>

            <button
                type="submit"
                className="btn btn-primary"> Ajouter
            </button>
        </form >
    )
}

export default ProjectForm
