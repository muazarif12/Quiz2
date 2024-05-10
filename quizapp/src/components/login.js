import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";
import { login } from "../redux/user.reducer";
import { Button, TextField } from "@mui/material";
import axios from "axios";



const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",
      social_auth_type: "normal"
    },
    onSubmit: async (values) => {
      const formData = new FormData();

      console.log("values ===",values); 

      formData.append("email", values?.email);
      formData.append("password", values.password);
      formData.append("social_auth_type", "normal");
      const response = await axios.post(
        "https://sandbox.practical.me/api/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
        NotificationManager.success(response.data.msg);
        dispatch(login(response.data.token));
      
    }
  });


  return (

    <form
      style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto' }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        onChange={formik.handleChange}
        value={formik?.values?.email}
        name="email"
        label="Email" 
        variant="outlined"
      />

      <TextField
        onChange={formik.handleChange}
        value={formik.values?.password}
        name="password"
        label="Password"
        variant="outlined"
      />

      <TextField
        onChange={formik.handleChange}
        value={formik?.values?.social_auth_type}
        name="social_auth_type"
        label="Social_auth_type"
        variant="outlined"
      />

      <Button type="submit" variant="contained" color="primary">
        LogIn
      </Button>
    </form>


  );
}

export default Login;