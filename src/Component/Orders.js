import React, {useState} from 'react'
import SingleOrder from "./SingleOrder";
import strawberry from "../assets/strawberry.jpg"
import banana from "../assets/banana.jpg"
import kiwi from "../assets/kiwi.jpg"
import apple from "../assets/apple.jpg"
import "./Orders.css"

function Orders() {


    return(
        <>
            <div className='orders-container'>
                <SingleOrder
                    imgUrl = {strawberry}
                    text = 'Aarbeien'
                    fruitID = '1'
                />
                <SingleOrder
                    imgUrl = {banana}
                    text = 'Bananen'
                    fruitID = '2'
                />
                <SingleOrder
                    imgUrl = {apple}
                    text = 'Applels'
                    fruitID = '3'
                />
                <SingleOrder
                    imgUrl = {kiwi}
                    text = 'Kiwi'
                    fruitID = '4'
                />


            </div>

        </>
    )

}
export default Orders