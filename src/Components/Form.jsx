import React, { useState } from 'react'
import closebutton from '../assets/closebutton.png'

const Form = (props) => {

  const { open, close } = props

  const [text, setText] = useState({
    title: "",
    descrip: ""
  });

  function handleChange(event) {
    const { name, value } = event.target

    setText(newValue => {
      return {
        ...newValue,
        [name]: value
      }
    })


  }

  function handleSubmit(e) {
    props.onadd(text, date)
    setText({
      title: "",
      descrip: ""
    })
    e.preventDefault();
  }
  return (
    <div className="form" style={{ display: open ? "block" : "none" }}>
      <div className="task">
        <h1>Add a new task</h1>
        <img src={closebutton} alt="" onClick={close} />
      </div>

      <form action="">
        <input type="text" name="title" id="" onChange={handleChange} value={text.title} placeholder='Title' />

        <input type="text" name="descrip" id="" onChange={handleChange} value={text.descrip} placeholder='Description' />


        <button type="submit" className='sub' onClick={handleSubmit} >Save</button>
      </form>
    </div>
  );


}

export default Form