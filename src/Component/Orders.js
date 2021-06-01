import React, {useState} from 'react'
import SingleOrder from "./SingleOrder";
import strawberry from "../assets/strawberry.jpg"
import banana from "../assets/banana.jpg"
import kiwi from "../assets/kiwi.jpg"
import apple from "../assets/apple.jpg"
import "./Orders.css"
import Straw from "./Straw";
import Banana from "./Banana";
import Kiwi from "./Kiwi";
import Apple from "./Apple";

function Orders() {
const[countStraw, setCountStraw] = useState(0);
const[countKiwi, setCountKiwi] = useState(0);
const [countBan, setCountBan] = useState(0);
const [countAp, setCountAp] = useState(0)

    function reset(){
    setCountStraw(0);
    setCountAp(0);
    setCountBan(0);
    setCountKiwi(0);
    }

    return(
        <>
            <div className='orders-container'>
                <Straw countStraw = {countStraw}
                       setCountStraw = {setCountStraw}
                        imgUrl = {strawberry}
                        text = "Aarbeien"
                />
                <Kiwi countKiwi = {countKiwi}
                       setCountKiwi = {setCountKiwi}
                       imgUrl = {kiwi}
                       text = "Kiwi"
                />
                <Banana countBan = {countBan}
                       setCountBan = {setCountBan}
                       imgUrl = {banana}
                       text = "bananen"
                />
                <Apple countAp = {countAp}
                       setCountAp = {setCountAp}
                       imgUrl = {apple}
                       text = "Apple"
                />
                <button className="reset-button" onClick={reset}>reset</button>


            </div>

        </>
    )

}
export default Orders