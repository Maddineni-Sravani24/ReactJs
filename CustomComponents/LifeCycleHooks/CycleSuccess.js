import React from "react";
export class CycleSuccess extends React.Component
{
    constructor(){
        super();
    }
    componentDidMount(){
        alert('Success component Requested..');
    }
    componentWillUnMount(){
        alert('Success Component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Login success</h2>
            </div>
        )
    }
}