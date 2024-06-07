import { FaDeleteLeft } from "react-icons/fa6";

const TodoItem = ({todoName, todoDate, onDeleteClick}) => {
    
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger myBtn"
                  onClick={()=> onDeleteClick(todoName)}
          >
            <FaDeleteLeft/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
