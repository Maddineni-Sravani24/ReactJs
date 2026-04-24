import { useFormik } from "formik";
export function formikValidation(){
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Age</dt>
                    <dd><input type="text" /></dd>
                    <dt>Email</dt>
                    <dd><input type="text" /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}