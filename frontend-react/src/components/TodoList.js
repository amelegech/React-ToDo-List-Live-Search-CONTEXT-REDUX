import React from "react";
import { myContext } from "./Todos";
import './todoList.css'

const TodoList = (props) => {
  const { dispatch, todos,search } = React.useContext(myContext);
 
  const mySearchHandler=(e)=>{
    dispatch({type:"SEARCH", payload:e.target.value});
    const myKeyWored = todos.filter((item)=>{
        return item.toLowerCase().indexOf(search) !== -1
    });
    dispatch({type:"FILTERED", payload:myKeyWored})
 
}
  return (
    <div className="container">
      <h3>Amele's Todo list </h3>

      <h4>
        {todos.map((item, index) => {
          return (
            <ul>
              <li id={index}>{item}</li>{" "}
            </ul>
          );
        })}
      </h4>
      <div>
           <lable>Add Todo. Then, Search :<input type="text" placeholder="Search Todo" value={search} onChange={mySearchHandler}/></lable>
      {/* <h3>Search OutPut: {search}</h3> */}
      
      </div>
    </div>
  );
};
export default TodoList;
