import React from 'react'
import {useForm} from "react-hook-form";
import './Form.css'
function Form() {
    const {handleSubmit, register} = useForm();

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!')
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>

            <div className="basic-info">
                <label htmlFor="first-name">
                    voornaam:

                    <input
                        type="text"
                        id="first-name"
                        {...register("firstName")}
                    />
                </label>


                <label htmlFor="last-name">
                    achternaam:

                    <input
                        type="text"
                        id="last-name"
                        {...register("lastName")}
                    />
                </label>

                <label htmlFor="age">
                    leeftijd:
                    <input
                        type="number"
                        id="age"
                        {...register("age")}
                    />
                </label>

                <label htmlFor="postcode">
                    postcode:
                    <input
                        type="text"
                        id="postcode"
                        {...register("postcode")}
                    />
                </label>
            </div>

            <div className="radio-buttons">
                <label htmlFor="frequency">
                    Bezorgfrequentie
                    <input
                    type="radio"
                    id="frequency"
                        {...register("frequency")}
                    />
                </label>

           

            </div>



        </form>
    )
}

export default Form;