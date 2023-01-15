import React from "react";
import Apply from "./Apply";
import View from "./View";
import Contribute from "./Contribute";

function Main(){

    const goTo = (location) => {
        if(location === 'apply'){
            window.scrollTo({
                top: 730,
                behavior: 'smooth'
            })
        }
        else if(location === 'view'){
            window.scrollTo({
                top: 1000,
                behavior: 'smooth'
            })
        }
        else{
            window.scrollTo({
                top: 1000,
                behavior: 'smooth'
            })
        }
    }

    return(
        <>
            <img alt={'grants banner'} className={'h-[500px] w-[1000px] mx-auto'} src={require('../images/banner.png')}/>
            <p className={'text-5xl text-center font-semibold'}>AnveFund</p>
            <p className={'text-2xl text-center py-[18px] px-5'}>AnveFund is the gateway for you to fund your research projects with the help of cryptocoins. Register your projects and get it funded from others using cryptocoins</p>
            <div className={'flex justify-center pt-[18px]'}>
                <div className={'border-[2px] p-2 border-black rounded-full mx-2'}><button onClick={()=>goTo('apply')}> Apply for Fund </button></div>
                <div className={'border-[2px] p-2 border-black rounded-full mx-2'}><button onClick={()=>goTo('view')}> View Your Application </button></div>
                <div className={'border-[2px] p-2 border-black rounded-full mx-2'}><button onClick={()=>goTo('contribute')}> Contribute to Projects </button></div>
            </div>
            <div><Apply/></div>
            <div><View/></div>
            <div className={'pb-[50px]'}><Contribute/></div>
        </>
    )
}

export default Main;