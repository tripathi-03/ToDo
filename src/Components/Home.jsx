import React ,{ useEffect, useState } from 'react'


import Task from './Task';

const Home = () => {

    const initialarr=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

    const  [tasks,setTasks]= useState(initialarr);

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");


    const submitHandler =(e)=>{
        e.preventDefault();

        setTasks([...tasks,{
            title:title,description:description,
        }]);
        setDescription("");
        setTitle("");
        
    };

    const deleteTask =(index)=>{
        const filteredArr =tasks.filter((val,i)=>{
            return i!== index;
        });

        setTasks(filteredArr);
    }
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks]);
   

  return (
    <div className='container'>
        <h1>DAILY GOALS</h1>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder='TITLE'
         value={title}
          onChange={(e)=>setTitle(e.target.value)}
           
           />


        <textarea 
        placeholder='Description'
        value={description}
          onChange={(e)=>setDescription(e.target.value)}
          ></textarea>


        <button type='submit' >ADD</button>
    </form>

    {tasks.map((item,index)=>(
        <Task key={index} title={item.title} description={item.description}
        deleteTask={deleteTask} index={index}/>
    ))}


    </div>
  )
}

export default Home