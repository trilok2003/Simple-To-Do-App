import React, { useState, useRef } from "react";
import { MdAddToQueue } from "react-icons/md";

const AddTodo = ({ onNewItem }) => {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const noOfUpdates = useRef(0);

  const handleNameChange = (event)=>{
    //console.log(event.target.value);
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  }
  const handleDateCahnge = (event)=>{
    //console.log(event.target.value);
    setDueDate(event.target.value);
    console.log(`no of updates ae : ${noOfUpdates.current}`)
  }

  const handleAddButtonClicked = (event)=>{
    event.preventDefault(); 
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }


  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" 
                 onChange={handleNameChange}
                 value={todoName}
           />
        </div>
        <div className="col-4">
          <input type="date" 
                 onChange={handleDateCahnge} 
                 value={dueDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" 
                  className="btn btn-success myBtn"
                  // onClick={handleAddButtonClicked}
          ><MdAddToQueue/></button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
