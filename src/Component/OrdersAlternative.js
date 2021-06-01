import React, {useState} from 'react'
import SingleOrder from "./SingleOrder";
import strawberry from "../assets/strawberry.jpg"
import banana from "../assets/banana.jpg"
import kiwi from "../assets/kiwi.jpg"
import apple from "../assets/apple.jpg"
import "./Orders.css"

function OrderAlternative() {
const [strawberryAmount, setStrawberryAmount] = useState(0);
const [bananaAmount, setBananaAmount] = useState(0);
const [kiwiAmount, setKiwiAmount] = useState(0);
const [appleAmount, setAppleAmount] = useState(0);

    return(
        <>
            <div className='orders-container'>
                <SingleOrder
                    imgUrl = {strawberry}
                    text = 'Aarbeien'
                    value={strawberryAmount}
                    setStrawberryAmount = {setStrawberryAmount}

                />
                <SingleOrder
                    imgUrl = {banana}
                    text = 'Bananen'
                    value={bananaAmount}
                    setBananaAmount = {setBananaAmount}
                />
                <SingleOrder
                    imgUrl = {apple}
                    text = 'Applels'
                    value={appleAmount}
                    setAppleAmount = {setAppleAmount}
                />
                <SingleOrder
                    imgUrl = {kiwi}
                    text = 'Kiwi'
                    value={kiwiAmount}
                    setKiwiAmount = {setKiwiAmount}
                />


            </div>

        </>
    )

}
export default OrderAlternative