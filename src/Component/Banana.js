import React from 'react'
function Banana(props){
    return(
        <div className="order-container">
            <img src={props.imgUrl}/>
            <h2>{props.text}</h2>
            <button onClick={()=>{props.setCountBan(props.countBan -1)}}>
                -
            </button>
            <h2>{props.countBan}</h2>
            <button onClick={()=>{props.setCountBan(props.countBan+1)}}>
                +
            </button>

        </div>
    )
}
export default Banana