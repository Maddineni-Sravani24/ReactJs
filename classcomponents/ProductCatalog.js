import React from "react";
import 
export class ProductCatalog extends React.component
{
constructor(){
    super(props);
    this.state={
        tv:{
            Name:'Samsung',
            Price:45000.44
        } 
    }
}
render(){
    return(
        <div className="container-fluid">
            <h2>Product Catalog</h2>
            <GridComponent title={'Products Grid'} product={this.state.tv}/>
        </div>
    )
}
}