import React, {useState} from "react";

function Project(props){
    const [amount, setAmount] = useState(0);

    return(
        <>
            <div className={'pt-[18px]'}>
                <p className={'text-center text-2xl'}>{props.title}</p>
                <div className={'flex justify-center'}>
                    <p className={'text-lg'}> Author: {props.author}</p>
                </div>
                <div className={'flex justify-center'}>
                    <p className={'text-lg'}> Domains: {props.domain}</p>
                </div>
                <div className={'flex justify-center pt-1'}>
                    <p className={'text-lg'}> Amount Collected: {amount}</p>
                </div>
                <div className={'flex justify-center pt-1'}>
                    <p className={'text-lg'}> Amount left: {props.amount - amount}</p>
                </div>
                <div className={'flex justify-center pt-1'}>
                    <p className={'text-lg'}> Total Amount: {props.amount}</p>
                </div>
            </div>
        </>
    )
}

export default Project;