import { useEffect, useState} from 'react';

export default function Todo() {
  const [input, setInput] = useState(''); // input handle
  const [tasks, setTasks] = useState([]); 
  const [comp,setComp] = useState(false) // complited checkbox
  const [pen,setPen] = useState(false) // pending checkbox

  // Handle input change
  function handleInput(event) {
    setInput(event.target.value);
  }
function handleComp(event){
 setComp(event.target.checked)
}
function handlePen(event){
  setPen(event.target.checked)
}


  // Handle form submission
  function submit() {
    const newTask = {
      id: tasks.length + 1,
      task: input,
      date: new Date().toLocaleDateString(), // Use full date for consistency
      status: false,
    };

    if (!newTask.task) {
      alert("Please add a task");
    } else {
      setTasks([...tasks, newTask]); // Update the state with the new task
      setInput(''); // Clear the input field
    }
  }

  // Render all items
  function AllItems() {
    return (
      (comp?
        // completed tasks
        tasks.filter((task)=>{return task.status}).map((el)=>{
       return(<div className={"box w-min flex flex-col p-4 m-3 border-red-800 border-2 rounded-md  "} key={el.id} style={{backgroundColor:el.status?"lightgreen" : "lightcoral"}} >
          <div>{el.task}</div>
          <div>{el.date}</div>
          <div>{el.status ? "Done" : "Pending"}</div>
        </div>)
      }):
      pen?tasks.filter((el)=>{ return !el.status}).map((task)=>{
        return(
          <div className={"box w-min flex flex-col p-4 m-3 border-red-800 border-2 rounded-md  "} key={task.id} style={{backgroundColor:task.status?"lightgreen" : "lightcoral"}} >
          <div>{task.task}</div>
          <div>{task.date}</div>
          <div>{task.status ? "Done" : "Pending"}</div>
          <button onClick={() => {markAsDone(task.id)}}>Done</button>
        </div>
        )
      }):
      // All tasks 
      tasks.map((task) => (
        <div className={"box w-min flex flex-col p-4 m-3 border-red-800 border-2 rounded-md  "} key={task.id} style={{backgroundColor:task.status?"lightgreen" : "lightcoral"}} >
          <div>{task.task}</div>
          <div>{task.date}</div>
          <div>{task.status ? "Done" : "Pending"}</div>
          <button onClick={() => {markAsDone(task.id)}}>Done</button>
        </div>
      )))
      
    );
  }

 
  // Mark a task as done
  function markAsDone(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: true } : task
    );
    setTasks(updatedTasks);
  }
  return (
    <>

      <div id="top" className='bg-blue-700 text-white text-center w-min px-16 border-black border-2'>
        <h2 className='text-4xl font-semibold mt-5'>Todo</h2>
        <div id="middle">
          <h4>Task</h4>

          {/*input field */}
          <input
            type="text"
            className='border-2 border-black p-2 text-black rounded-sm m-3'
            value={input}
            onChange={handleInput}
            placeholder="Enter a task"
          />
          <button type="submit" className='px-5 py-1 mx-2 border-2 border-black m-3' onClick={submit}>Add</button>
        </div>
      </div>

    {/* filter component */}
      <div className="filter w-[350px] h-[40px] mt-1 bg-gray-500  flex items-center p-2">
        <label htmlFor="complite">Complite</label> 
        <input type="checkbox" name="status" id="complite" className='bg-red mr-3 ml-1 cursor-pointer' onChange={handleComp} checked={comp} />
        <label htmlFor="pending">Pending</label>
        <input type="checkbox" name='status' id='pending' className='bg-red mr-3 ml-1 cursor-pointer' onChange={handlePen} checked={pen} />
        
      </div>

    {/* tasks on display */}
      <div className="w-3/5 bg-gray-400 flex flex-wrap h-min my-4 border-2 border-gray-500">
        <AllItems />
      </div>
    </>
  );
}
