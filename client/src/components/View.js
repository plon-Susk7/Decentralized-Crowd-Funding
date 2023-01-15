import React, {useEffect, useState} from "react";
import Project from "./Project";
import axios from 'axios'

function View(){
    const [show, setShow] = useState(false);
    const [projectData, setProjectData] = useState([]);
    useEffect(() => { handleClick() }, [projectData]);

    const handleClick = () => {
        if(projectData.length!==0) setShow(!show);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        RegInfo(e.target.query.value);
    }

    const RegInfo = (toCheck) =>{
        axios.get("http://localhost:5000/regDetails")
        .then(res=>{
            for(let i=0; i<res.data.length; i++){
                if(res.data[i].title===toCheck) {
                    setProjectData(res.data[i]);
                }
            }
        })
        .catch(err=>console.log(err));
    }

    return(
        <>
            <p className={'pl-[36px] text-3xl pt-[36px]'}> View Your Application </p>
            <div className={'flex pl-[30px] pt-[18px] text-black'}>
                <form onSubmit={handleSubmit} className={'flex'}>
                    <input className={'border border-black rounded-2xl pl-[10px] w-[300px] p-1'} placeholder={'Enter Research Name'} id={'query'}/>
                    <div className={' border border-black rounded-full p-2 mx-2 bg-green-500 w-[80px] text-center'}>
                        <button type={'submit'}>View</button>
                    </div>
                </form>
            </div>
            {show && <>
                <Project title={projectData.title} amount={projectData.expectedAmount} domain={projectData.domain} author={projectData.author}/>
            </>}
        </>
    )
}

export default View;
