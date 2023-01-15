import React, {useState, useEffect} from "react";
import axios from "axios";
function Contribute(){

    const {ethereum}  = window;
    const [show, setShow] = useState(false);
    const [connect, setConnect] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [projectMetamask, setProjectMetamask] = useState('');
    const [projectDetails, setProjectDetails] = useState('');

    useEffect(() => { handleClick() }, [projectMetamask]);

    let account;

    const handleMetaMask = () =>{
        setConnect(true);
        ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
            account = accounts[0];
            ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
                console.log(result);
                let wei = parseInt(result,16);
                let balance = wei / (10**18);
                console.log(balance + " ETH");
            });
        });
    }

    const handlePayment = (e) => {
        e.preventDefault();
        setConnect(false);
        setShow(false);
        console.log('clicked')
        console.log(account)
        let transactionParam = {
            to: '0x148D4AC2566F792B4de454e13076B15bd801943E',
            from: '0x4Cf64eD662Fe048387cebAE47928A5F37C01f1be',
            value: '0x38D7EA4C68000'
        };

        ethereum.request({method: 'eth_sendTransaction', params:[transactionParam]}).then(txhash => {
            console.log(txhash);
            checkTransactionconfirmation(txhash).then(r => alert(r));
        });
        updateAmount();
    }

    const updateAmount = () =>{
        console.log(projectDetails);
    }


    function checkTransactionconfirmation(txhash) {
        let checkTransactionLoop = () => {
            return ethereum.request({method:'eth_getTransactionReceipt',params:[txhash]}).then(r => {
                if(r !=null) return 'confirmed';
                else return checkTransactionLoop();
            });
        };
        return checkTransactionLoop();
    }
    const handleClick = () => {
        if(projectMetamask!=='') setShow(true);
    }

    const handleDonate = () => {
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle(e.target.query.value);
        RegInfo(e.target.query.value);
    }

    const RegInfo = (toCheck) =>{
        console.log('start');
        axios.get("http://localhost:5000/regDetails")
            .then(res=>{
                for(let i=0; i<res.data.length; i++){
                    if(res.data[i].title===toCheck){
                        setProjectDetails(res.data[i]);
                        setProjectMetamask(res.data[i].walletID);
                        setAmount(res.data[i].expectedAmount-res.data[i].collectedAmount);
                    }
                }
            })
            .catch(err=>console.log(err));
    }

    return(
        <>
            <p className={'pl-[36px] text-3xl pt-[36px]'}> Contribute to Projects </p>
            <div className={'flex pl-[30px] pt-[18px] text-black'}>
                <form onSubmit={handleSubmit} className={'flex'}>
                    <input className={'border border-black rounded-2xl pl-[10px] w-[300px] p-1'} placeholder={'Enter Research Name'} id={'query'}/>
                    <div className={' border border-black rounded-full p-2 mx-2 bg-green-500 w-[100px] text-center'}>
                        <button onClick={handleClick} type={'submit'}>Contribute</button>
                    </div>
                </form>
            </div>
            {show && <>
                <p className={'pl-[36px] text-xl py-3'}>Topic: {title}</p>
                <p className={'pl-[36px] text-xl'}>Amount Needed: {amount}</p>
                {!connect && <div className={'ml-[36px] mt-[18px] border border-black rounded-full p-2 mx-2 bg-green-500 w-[200px] text-center'}><button onClick={handleMetaMask}>Connect Metamask</button></div>}
                {connect && <div className={'mt-[18px] pl-[36px]'}>
                    <form className={'flex'} onSubmit={handleDonate}>
                        <input className={'border border-black rounded-2xl pl-[10px] w-[300px] p-1'} placeholder={'Enter Amount'} id={'amount'}/>
                        <div className={' border border-black rounded-full p-2 mx-2 bg-green-500 w-[100px] text-center'}><button onClick={handlePayment} type={'submit'}>Donate</button></div>
                    </form>
                    </div>}
            </>}
        </>
    )
}

export default Contribute;