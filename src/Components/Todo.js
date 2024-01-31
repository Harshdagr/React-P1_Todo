import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {


    state = {
        task: ''
    }

    buttonhandel = () => {
       console.log(this.state.task)
        const value = this.state.task
        return value;



    }
    handletask = (event) => {
        this.setState({
            task: event.target.value

        })
    }
   
    render() {
        const list = [1 , 2 ,3 ,4, 5]
        const newlist = list.map(function(list){
            return <li>{list}</li>
        })
        return (

            
                <>
                    <div className='new'>
                        <div className='one'>To-Do APP</div>
                    </div>
                    <div className='container'>
                        <img src="./src/Hanuman(1)"></img>
                        <div className='Box'>
                            <h1>Create Your Task Here</h1>
                            <div className='task'>
                                {/* <label>Add Task</label> */}
                                <input type='text' className='input' placeholder='Enter Your Task' onChange={this.handletask}></input>
                                <button className='btn btn-outline-primary' onClick={this.buttonhandel}>Add Task</button>
                                
                                <button className='btn btn-outline-success'>Delete</button>
                            </div>

                            <ul>{newlist}</ul>

                        </div>

                    </div>
                </>
            
        )
    }
}

export default Todo
