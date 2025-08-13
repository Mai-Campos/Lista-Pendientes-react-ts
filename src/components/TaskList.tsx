import { Task } from "./Task";

type TaskList = {
    taskList: string[];
    deleteTask : (index:number) => void;
}

export const TaskList = ({taskList, deleteTask}: TaskList) => {
  return (
    <div className="taskList">
        {taskList.map((task, index) => (
            <Task task={task} key={index} deleteTask = {()=> deleteTask(index)}/>
        ))}
    </div>
  )
}