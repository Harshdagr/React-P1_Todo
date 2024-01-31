import React, { useState } from "react";
import "./Todo.css";
import img from './../Components/images/todoimage.png'


function Todo_hooks() {
    const [task, setTask] = useState("");
    const [listdata, setlistdata] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handletask = (event) => {
        setTask(event.target.value);
    };

    const buttonhandel = () => {
        if (task !== "") {
            if (editIndex !== null) {
                // If an edit is in progress, update the task at the editIndex
                const updatedList = [...listdata];
                updatedList[editIndex] = task;
                setlistdata(updatedList);
                setEditIndex(null);
            } else {
                // Add a new task to the list
                setlistdata((prevState) => {
                    return [...prevState, task];
                });
            }
            setTask("");
        }
    };

    const handledelete = (i) => {
        const newlist = [...listdata];
        newlist.splice(i, 1);
        setlistdata([...newlist]);
        setEditIndex(null);
    };

    const handleEdit = (i) => {
        // Set the task in the input field for editing
        setTask(listdata[i]);
        setEditIndex(i);
    };

    return (
        <>
            <div className="new">
                
                <div className="one">To-Do APP</div>
            </div>
            <div> <img src={img} alt=""></img></div>
            <div className="container">
               
                <div className="Box">
                    <h1>Create Your Task Here</h1>
                    <div className="task">
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter Your Task..."
                            onChange={handletask}
                            value={task}
                        ></input>
                        <button className="btn btn-outline-primary" onClick={buttonhandel}>
                            {editIndex !== null ? "Edit Task" : "Add Task"}
                        </button>
                    </div>

                    {listdata.map(function (listItem, i) {
                        return (
                            <div key={i} className="Listdata">
                                <span>
                                    {i + 1}. {listItem}
                                </span>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        handledelete(i);
                                    }}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        handleEdit(i);
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Todo_hooks;
