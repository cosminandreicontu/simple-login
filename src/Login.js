import React,{Component} from 'react';
import './Login.css';



class Login extends Component {
   render () {
   
   return (
       <div>
       <form className='container'>
          <span className='element'>
          <label>  Username 
            <input className='input' type='text' name='username'/> 
          </label>
          </span>
           <br/>
            
    
           <span className='element'>
            <label> TheEmail
             <input className='input' type='text' name='email address'/>
             </label>
            </span>
           <br/>
         
       <span className='element'>
          <label> Password
            <input className='input' type='text' name='password'/>
          </label>
        </span>
            <br/>
            <br/>
        

         <button> Log in </button>

        </form>

       </div>


   )}

} 

export default Login;