
export function DataBindingComponent(){
    var products=[
        {Name: "Winter Jacket" , Price:4500.44, Photo: "jacket.png"},
        {Name: "Nike Casuals", Price:6000.44, Photo: "shoe.jpg"},
        {Name:"Speaker",Price:5200.44, Photo: "speaker.jpg"}
    ];
    return(
        <div className="container-fluid mt-2">
            <h2>Products Table</h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product=>
                        <tr key={product.Name}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                            <td>
                                <img src={product.Photo} width="100" height="100" alt="" />
                            </td>
                            <td>
                                <button className="btn btn-outline-info">
                                    <span className="bi bi-pen-fill"></span>
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-outline-info">
                                    <span className="bi bi-trash-fill"></span>
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    )
}




/* export function DataBindingComponent(){
    var menu=[
        {Category:"Electronics", Products:["Mobile", "Watch"]},
        {Category:"Footwear", Products:["Nike Casuals","Lee Boot"]},
        {Name:"Speaker",Price:5200.44, Photo: "speaker.jpg"}
    ];
    return(
        <div claaName="container-fluid mt-2">
            <ol>
                {
                    menu.map(item=>
                        <li key={item.Category}>
                            {item.Category}
                            <ul>
                                {
                                item.Products.map(product=>
                                    <li key={product}>{product}</li>
                                )
                            }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <select>
                {
                    menu.map(item=>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product=>
                                    <option key={product}>{product}</option>
                                )
                            }
                        </optgroup>

                    )
                    
                }
            </select>
        </div>
    )
} */


import { useState } from "react";
export function DataBindingComponent(){
    const [username]= useState('John');
    const [product]= useState({Name:"TV",Price:56000.44});
    const [categories]= useState(["Electronics","Footwear"]);
    return(
        <div className="container-fluid mt-2">
        {username}
        <dl>
        <dt>Name</dt>
        <dd>{product.Name}</dd>
        <dt>Price</dt>
        <dd>{product.Price}</dd>
        </dl>
        <ol>
            {
                categories.map(category=>
                    <li>{category}</li>
                )
            }
        </ol>
        </div>
    )
}


import { useState } from "react"
export function DataBindingComponent(){

const [product, setProduct]=useState({Name:'Your Product Name',Price:0,City:'',Stock:false})
const [updatedProduct, setUpdatedProduct]=useState({Name:'',Price:0,City:'',Stock:false})

function ChangeName(e){
   setProduct({
    Name: e.target.value,
    Price: product.Price,
    City: product.City,
    Stock: product.Stock

   }) 
}
function ChangePrice(){
    setProduct({
    Name: product.Name, 
    Price: e.target.value,
    City: product.City,
    Stock: product.Stock

}
function ChangeCity(){
    setProduct({
    Name: product.Name,
    Price: product.Price,
    City: e.target.value,
    Stock: product.Stock

}
function ChangeStock(){
    setProduct({
    Name: product.Name,
    Price: product.Price,
    City: product.City,
    Stock:e.target.value

})
}
function RegisterClick(){
    setUpdatedProduct
}
return(
    <div className="container-fluid mt-2">
        <div className="row">
            <div className="col-3">
                <h2>Register</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={ChangeName} value={product.Name} className="form-control" />
                <dt>Price</dt>
                <dd><input type="text" onChange={ChangePrice} value={product.Price} className="form-control" />
                <dt>City</dt>
                <dd>
                    <select onChange={ChangeCity} value={product.City} className="form-select">
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dt>Stock</dt>
                <dd className="form-switch"><input onChange={ChangeStock} className="form-check-input" checked={product.Stock}  />
                </dl>
            </div>
            <div className="col-9">
                <h2>Product Details </h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{updatedProduct.Name}</dd>
                    <dt>Price</dt>
                    <dd>{updatedProduct.Price}</dd>
                    <dt>City</dt>
                    <dd>{updatedProduct.City}</dd>
                    <dt>Stock</dt>
                    <dd>{(updatedProduct.Stock==true)?"Available":"Out of Stock"}</dd>
                </dl>
        </div>
    </div>
</div>
)
}

  