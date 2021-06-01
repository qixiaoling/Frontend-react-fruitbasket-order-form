import React from 'react'
function Straw(props){
    return(
        <div className="order-container">
            <img src={props.imgUrl}/>
            <h2>{props.text}</h2>
            <button onClick={()=>{props.setCountStraw(props.countStraw -1)}}>
                -
            </button>
            <h2>{props.countStraw}</h2>
            <button onClick={()=>{props.setCountStraw(props.countStraw+1)}}>
                +
            </button>

        </div>
    )
}
export default Straw