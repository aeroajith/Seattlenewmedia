import React, { useEffect, useState } from 'react'
import { Button, Divider, Form, Input, message,Space,notification, } from 'antd'
import { Link, useNavigate, } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { FacebookOutlined, GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { login } from './Actions/UserAction'
import "./Login.css"


 
export default function LoginScreen() {

 

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'vertical'
      ? {
          labelCol: {
            span: 12,
          },
          wrapperCol: {
            span: 30,
          },
        }
      : null;

    const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const [username, setUsername] = useState("admin")
  const [password, setPassword] = useState("password")
 
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const navigate = useNavigate()

  const dispatch = useDispatch()



  useEffect(()=>{
    if(userInfo){
      message.success("Login Successfull")
      navigate('/index/home')
    } 
  },[navigate, userInfo])

  const handlesubmit = () =>{
    if( username !== "admin" || password !== "password"){
      notification.error({
        message:"Invalid credentials",
        description:"Check username and password"
      })
    }
    console.log(username, password)
    dispatch(login(username, password))
    console.log("Form Submitted")


    
  }

  return (
    <div className='login-background'> 
     
      
      <Form className='login-form' 
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
     
    <h3 className='title'>Login</h3>
    <p>Don't have an account yet?<Link to="/signup">  Sign Up</Link></p>
    
      <Form.Item  label="Username" name={"myUsername"}   
        rules={[{
        required:true,
        type:"text",
        message:"Please enter a valid username"
      }]}
      > 
        <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:"#6495ED"}} />}
        value={username}  
        defaultValue="admin" 
        onChange={(event)=>setUsername(event.target.value)} 
        placeholder='Enter Email'/>
      </Form.Item>
      
      
      <Form.Item label="Password" name={"myPassword"} 
      rules={[{
      required:true,
      type:"password",
      message:"Please enter a password"
      }]}
      >
        
      <Input.Password prefix={<LockOutlined className="site-form-item-icon" style={{color:"#6495ED"}} />} 
       value={password}
       defaultValue="password"  
       onChange={(event)=>setPassword(event.target.value)} 
       placeholder='Enter Password'/>
      </Form.Item>
     
      <div className='login-button'>
      <Button type='primary' 
       htmlType='submit' 
       onClick={handlesubmit} block>Sign In</Button>
      </div>
      <Divider style={{color:"grey"}}>or Connect with</Divider>
      <div className='social-logins'>
        <button id="button" ><GoogleOutlined className='login-google-button'/> Google</button>
        <button id="button" ><FacebookOutlined className='login-facebook-button'/> Facebook</button>
      </div>
      

   </Form>
       
    </div>
  )
}
