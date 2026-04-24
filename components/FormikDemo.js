
import {useFormik} from "formik";
export function FormikDemo(){

    const formik = useFormik({
        initialValues:{
            UserName: '',
            Mobile:''
        },
        onSubmit : (values) =>{
            alert(JSON.stringify(values));
        }
    })
   
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" value={formik.values.UserName} onChange={formik.handleChange} type="text" /></dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" value={formik.values.Mobile} onChange={formik.handleChange} type="text" /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}