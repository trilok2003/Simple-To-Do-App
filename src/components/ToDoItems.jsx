import TodoItem from "./TodoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({toDo, onDeleteClick}) => {
  return (
    <div className={styles.itemsContainer}>
        {toDo.map((item) =>(
            <TodoItem key={item.name} todoName={item.name} todoDate={item.date}
                      onDeleteClick = {onDeleteClick}
            />
        ))}
    </div>
  )
}

export default ToDoItems;
