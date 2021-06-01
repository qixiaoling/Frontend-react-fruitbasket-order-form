import React from 'react'
function Kiwi(props){
    return(
        <div className="order-container">
            <img src={props.imgUrl}/>
            <h2>{props.text}</h2>
            <button onClick={()=>{props.setCountKiwi(props.countKiwi -1)}}>
                -
            </button>
            <h2>{props.countKiwi}</h2>
            <button onClick={()=>{props.setCountKiwi(props.countKiwi+1)}}>
                +
            </button>

        </div>
    )
}
export default Kiwi