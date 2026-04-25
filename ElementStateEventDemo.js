import { useState } from "react";
export function ElementStateEventDemo(){
    const [msg, setMsg]=useState('');
    function GetProductDetails(e){
        switch(e.target.id){
            case "speaker":
            setMsg('40% OFF on Speakers');
            break;
            case "jacket":
            setMsg('70% OFF on Winter wear');
            break;
        }
    }
        
    return(
        <div className="container-fluid">
           <img id="speaker" onTouchStart={GetProductDetails} src="speaker.png" width="100" height="100" />
           <img id="jacket" onTouchStart={GetProductDetails} src="jacket.jpg" width="100" height="100" />
           <h1>{msg}</h1>

        </div>
    )
}