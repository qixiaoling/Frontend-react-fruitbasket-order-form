import React from "react";

<>
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor='first-name'>
            <input
                type='text'
                id='first-name'
                {...register("firstName")}
            />
        </label>
        <label htmlFor='last-name'>
            <input
                type='text'
                id='last-name'
                {...register("lastName")}
            />
        </label>
        <label htmlFor='age'>
            <input
                type='number'
                id='age'
                {...register("age")}
            />
        </label>
        <label htmlFor='postcode'>
            <input
                type='text'
                id='postcode'
                {...register("postCode")}
            />
        </label>
    </form>
    <div className="besides-form">
        <div className="radio-container">
            <p>Bezorgfrequentie</p>
            <label htmlFor='frequency'>
                <input
                    type="radio"
                    id="frequency"
                    {...register("radio-iedere-week")}
                />Iedere week
            </label>

            <label htmlFor='frequency'>
                <input
                    type="radio"
                    id="frequency"
                    {...register("radio-om-week")}
                />Om de week
            </label>

            <label htmlFor='frequency'>
                <input
                    type="radio"
                    id="frequency"
                    {...register("radio-iedere-maand")}
                />Iedere maand
            </label>

            <label htmlFor='frequency'>
                <input
                    type="radio"
                    id="frequency"
                    {...register("Anders")}
                />Anders
            </label>

        </div>
        <div className='review-container'>
            <label htmlFor='review'>
                Opmerkingen:
                <textarea
                    id='review'
                    rows='30'
                    cols='20'
                    placeholder='Wat vond je?'
                    {...register("review")}>
                        </textarea>
            </label>
        </div>
        <div className="agreement">
            <label htmlFor='agreement'>
                <input
                    type='checkbox'
                    id='agreement'
                    {...register("agreement")}
                />
                Ik ga akkoord met de voorwaarden
            < /label>
        </div>
        <button type='submit'>
            Verzend
        </button>
    </>