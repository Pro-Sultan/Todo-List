import { useState } from "react";
import Header from "./Header";
import './App.css'
import Form from "./Form";
import Note from "./Note";

function App() {
  const [isClick, setClick] = useState(false)

  const [item, setItem] = useState([])

  function showTask() {
    setClick(true)
  }
  function closeTask() {
    setClick(preview => {
      return !preview
    })
  }
  function addnote(note, date) {
    setItem(prevValue => {
      return [
        ...prevValue,
        note
      ]
    })

  }

  function deleteItem(id) {
    setItem(prevValue => prevValue.filter((item, index) => id !== index)
    )
  }
  return (
    <>
      <Header
        dotask={showTask}
        open={isClick}
        item={item}
      />
      <Form
        open={isClick}
        close={closeTask}
        onadd={addnote}
      />

      {item.map((todoItem, index) => {

        const {title, descrip} = todoItem
        return (
          
          <Note
            text={title}
            descrip={descrip}
            open={isClick}
            key={index}
            id={index}
            delete={deleteItem}
          />

        );
      })}
    </>
  );

}

export default App;
