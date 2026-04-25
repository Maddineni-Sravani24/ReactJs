
import React from "react";
export class Shopping extends React.Component
{
    constructor(){
        super();
        this.state={
            categories:[],
            products:[]
        }
    }
    LoadCategories(){
        fetch('http://fakestoreapi.com/products/categories')
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                categories:data
            })
        })
    }
    componentDidMount(){
        this.LoadCategories();
        this.LoadProducts();
    }
    render(){
        return(
            <div className="container-fluid row">
                <nav className="col-3">
                    <h3>Select category</h3>
                    <select className="form-select">
                        {
                            this.state.categories.map(category=>
                                <option key={category} value={category}> {category.toUpperCase()}</option>
                            )
                        }
                    </select>
                </nav>
                <main className="col-9">
                    <div className="d-flex flex-wrap overflow-auto" style={{height:'400px'}}>
                    {
                        this.state.products.map(product=>

                    <div className="card m-2">
                        <img src={product.image} height="150" className="card-img-top" />
                        <div className="card-header">
                            <p>{product.title}</p>

                        </div>
                    </div>
                        )
                    }
                    </div>
                    
                </main>
            </div>
        )
    }
}