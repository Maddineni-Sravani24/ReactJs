import { useState } from "react";
import './KeyEventDemo.css';
export function KeyEventDemo() {
    const [users]=useState([{"UserId":"john"},{"UserId":"john_nit"},{"UserId":"john12"}]);
    const [userMsg, setUSerMsg]=useStste('');
    const [errorColor, setErrorColor] = useState('');
    const [displayError, setDisplayError]= useState({'display':'none'})

    function VerifyUSerId(e){
        for(var user of users){
            if(user.UserID==e.target.value){
                setUSerMsg("USer Id Taken - Try Another");
                setErrorColor('invalid-style');
                break;
            }else{
                setUSerMsg("User Id Available");
                setErrorColor('valid-style');
            }
        }

    }
    function ClearMessage(){
        setUSerMsg('');
    }
    function VerifyCaps(e){
        alert(e.KeyCode);
      if(e.keyCode>=65 && e.keyCode<=90){
        setDisplayError({'display':'block'});
      }else{
        setDisplayError({'display':'none'});
      }
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onBlur={ClearMessage} onKeyUp={VerifyUserId} /></dd>
                <dd className={errorColor}>{userMsg}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onKeyPress={VerifyCaps} />
                </dd>
                <dd className="text-warning" style={displayError}>
                    <span className="bi bi-exclamation-triangle-fill"></span>Caps ON
                </dd>
            
            </dl>
        </div>
    )
}