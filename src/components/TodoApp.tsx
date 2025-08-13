import { useState } from "react";
import { TaskList } from "./TaskList";

 export const TodoApp = () => {

  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = ()=>{
    if (newTask.trim() === '') return
      setTasks(anteriorTasks => [...anteriorTasks, newTask])
      setNewTask('')
  }

  const handleDeleteTask = (index: number)=>{
    setTasks(task => task.filter((_,i) => i !== index))
  }
  
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) =>{
            setNewTask(e.target.value)
          }}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <TaskList taskList={tasks} deleteTask={handleDeleteTask}/>
    </div>
  )
} 