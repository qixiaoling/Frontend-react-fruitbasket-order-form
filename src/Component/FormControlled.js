import React, {useState} from 'react'
// import "./Form.css"
import Alert from "./Alert";

function FormControlled() {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        age: '',
        postcode: '',
        frequency: '',
        comment: '',
        personReview: 'google',
        checkTerms: false,
        alert: {
            show: false,
            type: '',
            msg: '',
        },

    })

    function handleChange(e) {
        const value = e.target.type === "checkbox" ?
            e.target.checked :
            e.target.value;
        setState(
            {
                ...state, [e.target.name]: value
            }
        )

    }

    function handleSubmit(e) {
        e.preventDefault();

        if(state.firstName = null){
            showAlert(true, 'danger', 'Niet alle velden zijn ingevuld.')
        }
        console.log("Submitted!")
    }

    function showAlert(show = false, type = '', msg = ''){
        setState({alert : show, type, msg})
    }

    return (
        <>
            <div className="form-container">
                <form className="form-container-inside" >
                    {alert.show && <Alert {...state.alert} removeAlert={showAlert}/>}
                    <div className="basic-info">
                        <label htmlFor="firstName">
                            fist name ：
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={state.firstName}
                                onChange={handleChange}/>

                        </label>
                        <label htmlFor="lastName">
                            last name ：
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={state.lastName}
                                onChange={handleChange}/>
                        </label>
                        <label htmlFor="age">
                            age ：
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={state.age}
                                onChange={handleChange}/>

                        </label>
                        <label htmlFor="postcode">
                            post code ：
                            <input
                                type="text"
                                id="postcode"
                                name="postcode"
                                value={state.postcode}
                                onChange={handleChange}/>

                        </label>

                    </div>
                    <br/>

                    <div className="frequency">
                        <p>Bezorgfrequentie</p>
                        <label htmlFor='frequency'>
                            <input
                                type="radio"
                                id="frequency"
                                name="frequency"
                                value="IedereWeek"
                                onChange={handleChange}
                            />Iedere week
                        </label>

                        <label className="frequency">
                            <input
                                type="radio"
                                id="frequency"
                                name="frequency"
                                value="omDeWeek"
                                onChange={handleChange}
                            />Om de week
                        </label>

                        <label className="frequency">
                            <input
                                type="radio"
                                id="frequency"
                                name="frequency"
                                value="IedereMaand"
                                onChange={handleChange}
                            />Iedere maand
                        </label>

                        <label className="frequency">
                            <input
                                type="radio"
                                id="frequency"
                                name="frequency"
                                value="Anders"
                                onChange={handleChange}
                            />Anders
                        </label>
                        {state.frequency === "Anders" && <p>Please specify</p>}
                    </div>
                    <br/>

                    <label htmlFor="comment">
                        Opmerking
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        cols="30"
                        rows="10"
                        placeholder="wat vond je?"
                        value={state.comment}
                        onChange={handleChange}
                    ></textarea>

                    <br/>
                    <label htmlFor="gevondenReview">Hoe heb je ons gevonden?</label>
                    <select id="gevondenReview" name="gevondenReview" value={state.personReview}
                            onChange={handleChange}
                    >
                        <option value="google">Google</option>
                        <option value="vriend">Vriend</option>
                        <option value="advertentie">Advertentie</option>
                        <option value="anders">Anders</option>
                    </select>

                    <br/>
                    <label htmlFor="checkTerms">
                        <input
                            type="checkbox"
                            id="checkTerms"
                            name="checkTerms"
                            checked={state.checkTerms}
                            onChange={handleChange}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <br/>
                    <button
                        type="submit"
                        disabled={state.checkedTerms}
                        onClick={handleSubmit}
                    >Verstuur
                    </button>
                </form>
            </div>

        </>

    )
}

export default FormControlled