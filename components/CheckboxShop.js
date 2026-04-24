import { useState, useEffect } from "react";

export function CheckboxShop() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems]=useState([]);
    const [itemsCount, setItemsCount]=useState(0);
    const [selectedCategories, setSelectedCategories]=useState([]);
    function GetCartCount(){
        setItemsCount(cartItems.length);
    }
    function HandleCategoryCheck(e){
        const value=e.target.value;
        if(e.ttarget.checked){
            setSelectedCategories(prev => [...prev,value]);
        }else{
            setSelectedCategories(prev => prev.filter(cat => cat!== value));
        }
    }
    function LoadCategories() {
        fetch("https://dummyjson.com/products/categories")
            .then(response => response.json())
            .then(data => {
                setCategories(["all",...data]);
            });
    }
    function LoadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
            });
    }
    useEffect(() => {
        LoadCategories();
        LoadProducts("https://dummyjson.com/products");
    }, []);
    
    function CategoryChanged(e){
        if(e.target.value === "all"){
            LoadProducts("https://dummyjson.com/products");
        }else{
            LoadProducts(`https://dummyjson.com/products/category/${e.target.value}`);
        }
    }
    function AddToCartClick(e){
        fetch(`https://dummyjson.com/products/${e.target.id}`)
        .then(response => response.json())
        .then(data => {
            setCartItems(data);
            alert(`${data.title}\nAdded to Cart`);
        })
        
        GetCartCount();
        console.log(itemsCount);
    }
    return (
        <div className="container-fluid">
            <div className="bg-dark text-white text-center p-2">
                <h1>
                    <span className="bi bi-cart4"></span> Shopping
                </h1>
            </div>

            <div className="row mt-2">
                <nav className="col-2">
                    <label className="form-label">Select Category</label>
                    <div>
<div>
    {
        categories.map((category, index) => {
            const value = category.slug ? category.slug : category;

            return (
                <div key={index}>
                    <input
                        type="checkbox"
                        value={value}
                        onChange={HandleCategoryCheck}
                    />
                    <label className="ms-2">
                        {category.name 
                            ? category.name.toUpperCase() 
                            : category.toUpperCase()}
                    </label>
                </div>
            );
        })
    }
</div>
        </div>
            </nav>
            <main className="col-8">
            <div className="d-flex flex-wrap catalog">
                {
                    products.map(product =>
                    <div key={product.id} className="card m-2 p-2" style={{ width: "200px" }}>                                   
                    <img
                    src={product.thumbnail}
                    className="card-img-top"
                    height="150"
                    alt=""
                    />
                    <div className="card-header">
                    <p>{product.title}</p>
                    </div>
                    <div className="card-body">
                    <dl>
                    <dt>Price</dt>
                    <dd>{product.price}</dd>
                    <dt>Rating</dt>
                    <dd>
                    <span className="bi bi-star-fill text-success"></span>
                    {product.rating}
                    </dd>
                    </dl>
                    </div>
                    <div className="card-footer">
                    <button onClick={AddToCartClick} id={product.id} className="btn btn-danger w-100">
                    <span className="bi bi-cart4"></span> Add to Cart
                    </button>                                   
                    </div>
                    </div>  
                    )
                    }
                    </div>
                </main>
                <aside className="col-2">
                    <button className="btn btn-dark w-100">
                        <span className="bi bi-cart"></span> [<span>{itemsCount}</span>] Cart Items
                    </button>
                </aside>
            </div>
        </div>
    );
}