import React from 'react'
import closebutton from '../assets/closebutton.png'

const Note = (props) => {
    return (
            <div className='note' >
                <h2>{props.text}</h2>

                <p>{props.descrip}</p>

              <img src={closebutton} alt="" className='rem' onClick={() =>{
                props.delete(props.id)
              }}/>
            </div>
    )
}

export default Note
// style = {{ backgroundColor: props.open ? "#f6f6f6" : "white" }}

