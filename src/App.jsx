import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    //console.log(`New items : ${itemName} , dueDate : ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName)=>{
    //console.log(`item deleted ${todoItemName}`);
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />} 
      <ToDoItems toDo={todoItems} onDeleteClick = {handleDeleteItem} />
    </center>
  );
}

export default App;
