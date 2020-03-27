import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [value, setValue] = useState([""]);

    const [newWord, setWord] = useState("");

    const update = (newTask: string) => {
        const temp : string[] = [newTask, ...value];
        setValue(temp);
        setWord("")
    }

    const deleteTask = (index: number) => {
        value.splice(index,1);
        const temp : string[] = [...value];
        setValue(temp);
    }

    return <div className="Full">
        <div className="Container">
        <input type="text" value={newWord} onChange={event => setWord(event.target.value)}/>
        <br />
        <button className="AddTaskButton" type="submit" onClick={() => update(newWord)}>Add Task</button>
        <br />
        <h2>{value.map((v,index) => v.length&&  <div className="Task">
            <span>{v}</span><button className="DeleteButton" onClick={() => deleteTask(index)}></button>
        </div>)}</h2>
        </div>
    </div>
}


export default App;
