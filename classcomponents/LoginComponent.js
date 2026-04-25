import React  from 'react';
export class LoginComponent extends React.Component
{
    constructor(){
        super();
        this.state ={
            title:'USer Login Page',
            product:{
                Name:"Samsung TV"
            }
        }
    }
    render()
        {
            return(
        <div>
            <h2>{this.state.title}</h2>
            <p>{this.state.product.Name}</p>
        </div>
            )
    }


}