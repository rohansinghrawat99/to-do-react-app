import React, {FormEvent, useState} from 'react';
import './App.css';

let allTask: string[] = [];
let activeTask: string[] = [];
let completedTask: string[] = [];

const App = () => {
    const [value, setValue] = useState<string[]>([]);

    const [newWord, setWord] = useState("");

    const allTasks = () => {
        setValue(allTask);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!newWord) {
            alert("The task is empty");
        } else {
            update(newWord);
        }
    };


    const update = (newTask: string) => {
        setValue([newTask, ...value]);
        allTask = [newTask, ...allTask]
        activeTask = [newTask, ...activeTask];
        setWord("")
    };

    const deleteTask = (index: number) => {
        activeTask.splice(index, 1);
        allTask.splice(index, 1);
        const temp: string[] = [...allTask];
        setValue(temp);
    };

    const completeTask = (index: number) => {
        const spliced: string[] = activeTask.splice(index, 1);
        completedTask = [...completedTask, ...spliced];
        const temp: string[] = [...activeTask];
        setValue(temp);
    };

    const completedTasks = () => {
        setValue(completedTask);
    };

    const activeTasks = () => {
        setValue(activeTask);
    };

    return <div className="Full">
        <div className="Container">
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" id="input-box" value={newWord} onChange={event => setWord(event.target.value)}/>
                <br/>
                <button className="AddTaskButton" type="submit">Add Task</button>
            </form>
            <br/>
            <h2>{value.map((v, index) =>
                <div key={index} className="Task">
                    <span>{v}</span>
                    <button className="CompletedButton" onClick={() => completeTask(index)}/>
                    <button className="DeleteButton" onClick={() => deleteTask(index)}/>
                </div>
            )}
            </h2>
            <br/>
            <br/>
            <button onClick={() => allTasks()}>All Tasks</button>
            <button onClick={() => activeTasks()}>Active Tasks</button>
            <button onClick={() => completedTasks()}>Completed Tasks</button>
        </div>
    </div>
};

export default App;
