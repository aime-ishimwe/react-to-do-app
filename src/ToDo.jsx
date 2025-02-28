import React, {useState} from "react"

function ToDo(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange (event){
        setNewTask(event.target.value);
    }

    function addTask (){
        if(newTask !==""){
            setTasks(tasks=>[...tasks, newTask]);
            setNewTask("");
        }
    }


    function deleteTask (index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }


   


    return(<div className="to-dos">
        <h1>My ToDos</h1>
        <div>
            <input type="text" placeholder="Enter Task" value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((tasks,index) => 
                <li key={index}>
                    <span className="text">{tasks}</span>
                    <button onClick={() =>deleteTask(index)} className="delete-task">Delete</button>
                </li>
                )}
            </ol>
    </div>);
}
export default ToDo