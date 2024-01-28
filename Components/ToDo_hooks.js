import React, { useState } from "react";
// import './Todo.css'
function Todo_hooks() {

    const [task, set_task] = useState('');
    const [listdata, setlistdata] = useState([]);
    const [count , setcount] = useState(0);

    const handletask = (event) => {
        set_task(event.target.value)

    }
    const buttonhandel = () => {
        if(listdata!=='')
        setlistdata((listdata) => {              // make function to work code synchronously     
            const updatelist = [...listdata, task]   // for append variable task into listdata 
            console.log(listdata)
            // set_task('')
            // setcount(Precount => Precount+1) 
            console.log(count)
            return updatelist;
           
       

        })
        //    return <li>{task}</li>
       

    }
    const handledelete = (i) => {
        const newlist =[...listdata]
        newlist.splice(i,1)
        setlistdata([...newlist])
    }
    
   

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
                        <input type='text' className='input' placeholder='Enter Your Task...' onChange={handletask}></input>
                        <button className='btn btn-outline-primary' onClick={buttonhandel}>Add Task</button>
                 
                    </div>
                   
                        {listdata.map(function (listdata, i) {
                            return (
                                <>
                                <h1 key={i}> 
                                <div className="Listdata">{listdata}
                                 <button className='btn btn-outline-success'onClick={handledelete}>Delete</button>
                                 </div>
                                 </h1>
                                
                                </>
                            ) 
                            
                            
                            // console.log(newlist)
                            
                        })}
                    
                </div>

            </div>
        </>

    )

}
export default Todo_hooks;