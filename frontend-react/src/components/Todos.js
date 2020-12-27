import React, { createContext } from "react";
import TodoList from './TodoList';
import './todos.css'

const initialState = {
  todos: ["Praying", "Daily Standup with Polo ","Coding"],
  todo:"",
  search: "",
};

const reducer = (state ={initialState}, action)=>{
    switch(action.type){
    //single todo    
        case "SINGL-TODO":
            return{
                ...state,
                todo:action.payload
            };
    //push the todo in to the array
        case "ADD-TODO":
            return{
            ...state,
            todos:state.todos.concat(state.todo)
              }
    //Search from the list and updat the state         
        case "SEARCH":
            return{
                ...state,
                search:action.payload
            }
    //Filter the key word, using indexOf(search)!== -1        
        case "FILTERED":
            return{
                ...state,
                todos:action.payload
            }

              default:
                  return state;
    }
}
 export const myContext = React.createContext();

const Todos = () => {
    const [state, dispatch] = React.useReducer(reducer,initialState);
  
  return (
    <div >
      <h3>Things that I want to do today</h3>
      < img src="/image/todos.jpg" alt="sticky note" className="img-todo"  /> 
      <h3>Single Todo: {state.todo}</h3>
      <lable>Todo:<input type="text" placeholder ="Enter what to do?" value={state.todo} onChange={(e)=>dispatch({type:"SINGL-TODO", payload:e.target.value})}/></lable> <br></br>
      
      <button onClick ={()=>{dispatch({type:"ADD-TODO"})}}>ADD Todo</button><br/><br/>
     
      <div>
          <hr/>
          <myContext.Provider value={{dispatch, todos:state.todos, search:state.search,}}>
              <TodoList/>
          </myContext.Provider>
      </div>
    </div>
  );
};
export default Todos;
