import "./ClassBinding.css";
import { useState } from "react";
export function ClassBinding(){
    const [theme,setTheme]=useState('');
    function ThemeChanged(e){
        if(e.target.checked){
            setTheme('dark-mode');
        }else{
            setTheme('');
        }
    }
    return(
        <div className="container-fluid">
            <form className={theme}>
                <div className="mt-2 mb-2">
                    <div className="form-switch">
                        <input onChange={ThemeChanged} className="form-check-input" type="checkbox" />Dark Mode
                        </div>
                        </div>
                <h2><span className="bi bi-person-fill"></span>User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control"></dd>
                </dl>
                <button className="btn btn-dark w-100">Login</button>
            </form>
        </div>
    )
}