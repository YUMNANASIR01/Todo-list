
"use client"

import React, { useState } from 'react';
import { GoTrash } from "react-icons/go";

export default function TodoList() {
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState(['Workout', 'Study']); 

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); 
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>TodoList 📋</h1>
      <div className="todoapp">
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddTask}>
            Add
          </button>
        </div>
        <ul className="list-container">
          {tasks.map((t, index) => (
            <li key={index} className="checked">
              {t}
              <span>
                  <GoTrash className='trash' style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => handleDeleteTask(index)} />
                  
              </span>
  
            </li>
            
          ))}
        </ul>
        <br />
      </div>
      <br />
    </div>
  );
}






