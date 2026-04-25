import { useFormik,Formik,Form,Field,ErrorMessage } from "formik";
import * as yup from "yup";
import {useState} from "react";
export function FormikValidationComponent(){

    function CityChange(e)
    {
        alert(e.target.value);
    }
    return(
        <div className="container-fluid">
             <Formik
              initialValues={
                {
            "UserName" : " ",
            "Age":0,
            "Mobile": "",
            "City": ""
             }
            }
            validationSchema={
                yup.object({
                    "UserName" : yup.string()
                                .required("User Name required")
                                .min(4,"Name too short")
                                .max(10,"Name too long"),
                    "Age":yup.number("Age must be Number")
                    .required("Age Required"),
                   "Mobile": yup.string()
                      .matches(/\+91\d{10}/, "Invalid Mobile")
                         .required("Mobile is required")
                })
            }
            onSubmit={
                (values)=>{
                    alert(JSON.stringify(values));
                }   
            } 
            
            >
                {
                fields =>
            <Form>
            {
                <div>
                <h2>Register User</h2>
                <dl>
                <dt>UserName</dt>
                    <dd><Field type="text" name="UserName"></Field></dd>
                    <dd className="text-danger">
                    <ErrorMessage name="UserName" > </ErrorMessage>
                    </dd>
                    <dt>Age</dt>
                    <dd><Field type="text" name="Age"></Field></dd>
                     <dd className="text-danger">
                    <ErrorMessage
                     name="Age"></ErrorMessage>
                    </dd>

                    <dt>Mobile</dt>
                    <dd><Field type="text" name="Mobile"></Field></dd>
                     <dd className="text-danger">
                    <ErrorMessage name="Mobile"></ErrorMessage>
                    </dd>

                    <dt> Your City</dt>
                    <dd><select onChange={CityChange} name="City">               
                        <option value="-1">Select City</option>
                    <option>Delhi</option>
                    <option>Hyderabad</option>
                    <option>Mumbai</option>
                    <option>Benglore</option>
                    </select>
                    </dd>
                    </dl>
                    <button disabled={(fields.isValid)?false:true} className="btn btn-primary">Register</button>
                    <button diabled={(fields.dirty)?false:true} className="btn btn-success">Save</button>
                </div>   
}       
            </Form>
}
    </Formik>
    </div>
    )
}




        