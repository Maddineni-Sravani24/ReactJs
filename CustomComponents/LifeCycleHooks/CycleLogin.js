import React from "react";

export class CycleLogin extends React.Component
{
    constructor(){
        super();
        this.state={
            UserName:'',
            Outlet:''
        }
    }
    UserNameChange(e){
        this.setState({
            UserName:e.target.value
        })
    }
    LoginClick(){
        if(this.state.UserName=='john'){
            this.setState({
                Outlet: <CycleSuccess />
            })
        }else{
            this.setState({
                Outlet :<CycleError />

            })
        }

    }
    render(){
        return(
            <div className="container-fluid">
                <h2>User Login</h2>
                User Name:
                <input type="text" onChange={this.UserNameChange.bind(this)} />
                <button onClick={this.LoginClick.bind(this)}>Login</button>
                <div>{this.state.Outlet}</div>

            </div>
        )
    }
}