import React from 'react';
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { CiSquareCheck } from 'react-icons/ci'
import { useToDoContext } from './ToDoContext/ToDoContext';

function TaskList() {

  const { task, handleRemove, handleEdit, handleAllRemove, handleComplete } =  useToDoContext();

  return(
    <div>
       <ul>
        {
          task.map((taskList) => (
            <li 
              className={`flex justify-between items-center border-b-2  py-1 flex-wrap ${taskList.complete && "line-through"}`}   
              key={taskList.id}
            >
              <div className="flex gap-3">
                <span className="cursor-pointer" onClick={() => handleComplete(taskList.id)}>
                  <CiSquareCheck size={25}/>
                </span>
                <span>{taskList.title}</span>
              </div>
              <div className="flex gap-3">
                <span className="cursor-pointer">
                  <FaEdit size={25} onClick={() => handleEdit(taskList.id)} />
                </span>
                <span className="cursor-pointer" onClick={() => handleRemove(taskList.id)}>
                  <MdDelete size={25} />
                </span>
              </div>
            </li>
          ))
        }

        {
          task.length > 0 && <button 
            className="border bg-[red] text-white px-3 py-1 rounded-md my-5 hover:bg-red-600"
            onClick={handleAllRemove}
          >
            Remove All
          </button>
        }
        
       </ul>
    </div>
  )
}

export default TaskList;