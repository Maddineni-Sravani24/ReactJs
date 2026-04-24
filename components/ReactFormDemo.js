import { useState } from "react";
export function ReactFormDemo(){
    
    const [userDetails, setUserDetails]= useState({UserName:'',Mobile:''})
    const [errors,setErrors]=useState({UserName:'',MobileEror:''})
    function NameChange(e){
        setUserDetails({
            UserName :e.target.value,
            Mobile:userDetails.Mobile
        })
        if(userDetails.UserName!=""){
            setErrors({
                UserError:errors.UserError,
                MobileError:errors.MobileError
            })
        }
    }
    function MobileChange(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Mobile:e.target.value
        })
        if(userDetails.Mobile!=""){
            setErrors({
                UserError: errors.UserError,
                MobileError:errors.MobileError
            })
    }
}
    function SubmitClick(e){
        e.preventDefault();
       if(userDetails.UserName==''){
        setErrors({
        UserError:'User NAme Required',
        MobileError :errors.MobileError
       })
    }
    if(userDetails.Mobile=''){
        setErrors({
        UserError:errors.MobileError,
        MobileError:'Mobile Required'  
    })
       }
       function VerifyMobile(e){
        var pattern =/+91\d{10}/;
        if(e.target.value.match(pattern)){
            setErrors({
                MobileError:''
            })
        }else{
            setErrors({
                MobileError:'Invalid Mobile'
            })
        }
    }
    return(
        <div className="container-fluid">
            <form onSubmit={SubmitClick}>
                <h3>Register User - React Form</h3>
                <dl>
                    <dt>Name</dt>
                    <dd><input onChange={NameChange} type="text" /></dd>
                    <dd className="text-danger">{errors.UserError}</dd>
                    <dt>Mobile</dt>
                    <dd><input onKeyUp={VerifyMobile} onChange={MobileChange} type="text" /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}
}