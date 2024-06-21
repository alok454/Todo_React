import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4} from 'uuid';



const ToDoContext = createContext();

const useToDoContext = () => useContext(ToDoContext);


const getLocalItem = () => {
  const storeItem = localStorage.getItem("list");
  return storeItem ? JSON.parse(storeItem) : []
}


const TodoProvider = ({ children }) => {

  const [activity, setActivity] = useState("");
  const [task, setTask] = useState(getLocalItem());
  const [update, setUpdate] = useState(true);
  const [edit, setEdit] = useState(null);


  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(task))
  }, [task])


  const handleUpdate = () => {

    if(!activity) {
      alert("please fill the input box");
    }  
    else if(!update) {
      setTask(task.map((newElement) => {
        if(newElement.id === edit){
          return {...newElement, title: activity};
        }
        return newElement;
      }))

      setActivity("");
      setUpdate(true);
      setEdit(null);
    } else {
      const allActivity = {id: uuidv4(), title: activity, complete: false}
  
      setTask([...task, allActivity])
      setActivity("")
    }
  };

  const handleRemove = (id) => {
    
    const filterItem = task.filter((item) => (
      item.id !== id
    ))

    setTask(filterItem)
  }

  const handleEdit = (id) => {
    const findItem = task.find((item) => {
      return id === item.id
    })

    setActivity(findItem.title.trim())
    setUpdate(false)
    setEdit(id)
  }

  const handleAllRemove = () => {
    setTask([])
  }

  const handleComplete = (id) => {
    setTask(task.map((compItem) => {
      if(compItem.id === id) {
        return {...compItem, complete: !compItem.complete}
      }

      return compItem;
    }))
  }

  const allValue = {activity, setActivity, task, setTask, update, setUpdate, edit, setEdit, handleUpdate, handleRemove, handleEdit, handleAllRemove, handleComplete};

  return (
    <ToDoContext.Provider value={allValue}>
      {children}
    </ToDoContext.Provider>
  )
}



export {ToDoContext, TodoProvider, useToDoContext};