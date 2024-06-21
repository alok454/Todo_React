import TaskList from './TaskList';
import { useToDoContext } from './ToDoContext/ToDoContext';

const ToDoList = () => {

  const {activity, setActivity, update, handleUpdate} = useToDoContext();
  
  return (
      <section className="w-screen min-h-screen text-gray-600 flex bg-gray-200 sm:p-10 p-2">
        <div className="w-full max-w-[600px] mx-auto h-full flex flex-col rounded gap-5">
          <h2 className="text-gray-900 font-bold text-center text-5xl">
            Todo
          </h2>
          
          <div className="flex justify-between sm:flex-row flex-col w-full gap-5">
            <div className="w-full">
              <input 
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              />
            </div>

            {
              update ? <button 
                className="text-white bg-indigo-600 border-0 sm:px-5 py-2  focus:outline-none hover:bg-indigo-700 rounded text-lg"
                onClick={handleUpdate}
              >
                Add
              </button> : <button 
                className="text-white bg-indigo-600 border-0 sm:px-5 py-2 focus:outline-none hover:bg-indigo-700 rounded text-lg"
                onClick={handleUpdate}
              >
                Update
              </button>
            }
          </div>

          <TaskList/>
        </div>
      </section>
  )
}

export default ToDoList;