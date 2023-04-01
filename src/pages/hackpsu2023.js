
// default template

import { useEffect, useState } from 'react'

export default function hackpsu2023() {

    const [terminalUsername, setTerminalUsername] = useState("...");
    const [terminalPassword, setTerminalPassword] = useState("...");

    useEffect(() => {
        const fetchTerminalData = async () => {
            try {
                const endPoint = 'https://terminal-gateway2.ctfguide.com/createvm';
                const requestOptions = {
                    method: 'GET',
                }
                const response = await fetch(endPoint, requestOptions);
                const result = await response.json();

                setTerminalUsername(result.username);
                setTerminalPassword(result.password);




            } catch (err) {
                console.log(err);
                setTerminalUsername("Something went wrong.")
                setTerminalPassword("Something went wrong.")

            }
        };

        try {
        fetchTerminalData();
        } catch(err) {
            console.log(err)
            setTerminalUsername("Something went wrong.")
            setTerminalPassword("Something went wrong.")
        }
    }, []);
    return (
    
        <>
          <script src="https://cdn.tailwindcss.com"></script>

    


        

 <div className="px-2 py-1">

    <div className="flex my-auto mb-2">
        <img width="50" src="https://www.ctfguide.com/darkLogo.png"></img>
        <p className="text-md mt-3 mr-3">@</p>
        <img width="30" src="https://hackpsu.org/assets/images/logo.svg"></img>
        <p style={{fontFamily: 'Poppins, sans-serif'}} className="text-xl text-center ml-auto">Connect to the terminal using the username <span className='text-yellow-500'> {terminalUsername} </span> and the password <span className='text-yellow-500'>{terminalPassword}</span> </p>
    </div>
    <p style={{fontFamily: 'Poppins, sans-serif'}}><span className="text-green-500 text-xl mr-2">⦿</span>Connected to the terminal2.ctfguide.com -- Don't see anything? <span className="cursor-pointer text-blue-500 hover:underline" onClick={() => {window.open('https://terminal2.ctfguide.com/wetty')}}>Click here</span></p>

        <iframe  className="border-none" style={{width: '100%', height: '400px', borderStyle: "none"}} src="https://terminal2.ctfguide.com/wetty"></iframe>
            
            
    </div>
    
    </>
    )
    }