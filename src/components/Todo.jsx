import { useState } from 'react';
import '../styles/Todo.css';

export default function Todo() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle input change
  function handleInput(event) {
    setInput(event.target.value);
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
      tasks.map((task) => (
        <div className="box" key={task.id}>
          <div className="task">{task.task}</div>
          <div className="task">{task.date}</div>
          <div className="task">{task.status ? "Done" : "Pending"}</div>
          <button onClick={() => markAsDone(task.id)}>Done</button>
        </div>
      ))
    );
  }

  // Mark a task as done
  function markAsDone(id) {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: true } : task
    );
    setTasks(updatedTasks); // Update the state
  }

  return (
    <>
      <div id="top">
        <h2>Todo</h2>
        <div id="middle">
          <h4>Task</h4>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Enter a task"
          />
          <button type="submit" onClick={submit}>Add</button>
        </div>
      </div>
      <div className="filter"></div>
      <div className="tasks">
        <AllItems />
      </div>
    </>
  );
}
