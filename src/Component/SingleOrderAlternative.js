import React, {useState} from 'react'
import "./SingleOrder.css"


function SingleOrderAlternative({imgUrl, text, value, setStrawberryAmount,
                                    setBananaAmount, setAppleAmount ,setKiwiAmount }) {
    const [amount, setAmount] = useState(0);
    return (
        <>
            <div className='order-container' key={fruitID}>
                <img src={imgUrl}/>
                <h2>{text}</h2>
                <button onClick={()=>{setAmount(amount-1)}}>
                    -
                </button>
                <h2>{amount}</h2>
                <button onClick={()=>{setAmount(amount+1)}}>
                    +
                </button>
            </div>
        </>
    )
}

export default SingleOrderAlternative