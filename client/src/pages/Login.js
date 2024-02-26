import React,{useState} from "react";
import { Form, Input,message } from "antd";
import { Link,useNavigate} from "react-router-dom";
import axios from 'axios'
import Spinner from "../components/Spinner";
const Login = () => {
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
  //form submited
  const submitHandler = async(values) => {
    try{
        setLoading(true)
const {data}= await axios.post('/login',values);
message.success('login success');
setLoading(false)
localStorage.setItem('user',JSON.stringify({...data,password:''}))
navigate('/')
    }catch(error){
        setLoading(false)
message.error('somthing went wrong');
    }
  };
  return (
    <>
      <div className="register-page">
      {loading && <Spinner/>}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login page</h1>
          <Form.Item label="Email" name="email">
            <Input type="email"  />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password"  />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">Not a user ? Click Here to Register</Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
