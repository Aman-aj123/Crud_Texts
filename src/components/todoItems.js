import React from 'react'
const widthStyle = {
     width: "18rem"
}

const todoItems = (props) => {
     return (
          <>

               <div className="mx-1 my-2 card" style={widthStyle}>
                    <div className="card-body">
                         <h5 className="card-title">{props.title}</h5>
                         <p className="card-text">{props.des}</p>
                         <button className="btn btn-danger"  onClick={props.handleClick}>Delete</button>
                    </div>
               </div>
          </>
     )
}

export default todoItems
