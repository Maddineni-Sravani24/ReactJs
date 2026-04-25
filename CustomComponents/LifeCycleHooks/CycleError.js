import React from "react";
export class CycleError extends React.Component
{
    constructor(){
        super();
    }
    componentDidMount(){
        alert('Error component Requested..');
    }
    componentWillUnMount(){
        alert('Error Component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Invalid User Name</h2>
            </div>
        )
    }
}