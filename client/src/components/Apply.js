import React from "react";
import axios from 'axios'

function Apply(){
    const handleSubmit = (e) =>{
        e.preventDefault();
        let request = {
            title : e.target.Topic.value,
            author : e.target.Researcher.value,
            domain : e.target.Domain.value,
            expectedAmount : e.target.Grants.value*1,
            collectedAmount : 0,
            walletID : e.target.Metamask.value
        }
        console.log(request)
        axios.post("http://localhost:5000/regDetails",request)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
    }

    return(
        <>
            <p className={'pl-[36px] text-3xl pt-[18px]'}> Apply </p>
            <div className={'flex flex-col pt-[18px] pl-[18px] text-black'}>
                <form onSubmit={handleSubmit}>
                    <p className={'pl-[10px]'}> Enter your personal details </p>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1'} placeholder={'First Name'}/>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1'} placeholder={'Middle Name'}/>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1'} placeholder={'Last Name'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} placeholder={'Email ID'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} placeholder={'Contact Number'}/>
                    </div>
                    <p className={'pl-[10px] pt-[10px]'}> Enter your research details </p>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} id={'Topic'} placeholder={'Research Name'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} id={'Researcher'} placeholder={'Researcher'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} id={'Domain'} placeholder={'Domain'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} id={'Grants'} placeholder={'Expected Grant'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} id={'Metamask'} placeholder={'Metamask ID'}/>
                    </div>
                    <div className={'flex pt-[10px] pl-[5px]'}>
                        <div className={'border border-black rounded-full p-2 mx-2 bg-green-500'}><button type={'submit'}>Apply</button></div>
                        <div className={'border border-black rounded-full p-2 mx-2 bg-red-500'}><button type={'reset'}>Reset</button></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Apply;