
/* export class GridComponent extends React.Component
{
    constructor(){
        super(props);
    }
    render(){
        return(
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.products.map(product=>
                                        <tr>
                                            <td>{product.Name}</td>
                                            <td>{product.Price}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                </table> 
            </div>
        )
    }
} */

    export function GridComponent(props){
        return(
            <div>
                Grid
                <h2>{props.title}  </h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{props.product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{props.product.Price}</dd>
                </dl>
            </div>
        )
    }


    export function GridComponent(props){
        return(
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {
                                props.fields.map((field)=>
                                <th>{field}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((item)=>
                            <tr>
                                {
                                    Object.keys(item).map((key)=>
                            <td>{item[key]}</td>
                            )
                        }
                        </tr>
                            )
                        }
                        

                    </tbody>
                </table>
            </div>
        )
    }