import {useFormik} from "formik";
import * as yup from "yup";
export function YupValidation(){ 
    const formik = useFormik({
        initialValues:{
            UserName: '',
            Age:'',
            Mobile:''
        },
        validationSchema:yup.object({
            UserName:yup.string()
            .min(4,"Name too short")
            .required("Name required")
            .max(10,"Name too Long"),
             
            Age:yup.number()
            .required("Age Required"),

          
            Mobile: yup.string()
            .required("Mobile Required")
            .matches(/\+91\d{10}/)
        }),
        onSubmit : (values)=>{
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">
            
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" {...formik.getFieldProps("UserName")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="Age" {...formik.getFieldProps("Age")}></input></dd>
                     <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile"  {...formik.getFieldProps("UserName")} type="text" /></dd>
                     <dd className="text-danger">{formik.errors.Mobile}</dd>

                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}