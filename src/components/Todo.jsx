import { useEffect, useState} from 'react';

export default function Todo() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [comp,setComp] = useState("off")
  const [Pen,setPen] = useState("")

  // Handle input change
  function handleInput(event) {
    setInput(event.target.value);
  }
function handleComp(event){
  if(event){
    console.log(event)
  }
}
// setInterval(() => {
//   console.log("now",comp)
// }, 5000);

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
      tasks.map((task) => (
        <div className={"box w-min flex flex-col p-4 m-3 border-red-800 border-2 rounded-md  "} key={task.id} style={{backgroundColor:task.status?"lightgreen" : "lightcoral"}} >
          <div>{task.task}</div>
          <div>{task.date}</div>
          <div>{task.status ? "Done" : "Pending"}</div>
          <button onClick={() => {markAsDone(task.id)}}>Done</button>
        </div>
      ))
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
      <div className="filter w-[350px] h-[40px] mt-1 bg-gray-500  flex items-center p-2">
        <label htmlFor="complite">Complite</label> 
        <input type="checkbox" name="complite" id="complite" className='bg-red mr-3 ml-1 cursor-pointer' onChange={handleComp} />
        <label htmlFor="pending">Pending</label>
        <input type="checkbox" name='pending' id='pending' className='bg-red mr-3 ml-1 cursor-pointer' />
      </div>
      <div className="w-3/5 bg-gray-400 flex flex-wrap h-min my-4 border-2 border-gray-500">
        <AllItems />
      </div>
    </>
  );
}
