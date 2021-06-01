import React from 'react'
function Apple(props){
    return(
        <div className="order-container">
            <img src={props.imgUrl}/>
            <h2>{props.text}</h2>
            <button onClick={()=>{props.setCountAp(props.countAp -1)}}>
                -
            </button>
            <h2>{props.countAp}</h2>
            <button onClick={()=>{props.setCountAp(props.countAp+1)}}>
                +
            </button>

        </div>
    )
}
export default Apple