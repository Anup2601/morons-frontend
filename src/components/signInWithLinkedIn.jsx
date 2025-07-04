// SignInWithLinkedIn.jsx
import React from "react";
import { Button } from './ui/button';
import axios from "axios";
const SignInWithLinkedIn = () => {
  const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  const getuserinfo = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/linkedin/userinfo`); 
      
    }
    catch (error) {
      console.error('Error fetching user info:', error);
    }
  }

  return (
    <a href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=866rz0asjacoqy&redirect_uri=${backendURL}/api/linkedin/callback&scope=openid email profile`} >

    <Button 
      // onClick={getuserinfo}
      // className="w-full flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 font-medium my-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="m-3">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg>
      Sign up with LinkedIn
    </Button>
    </a>
  );
};

export default SignInWithLinkedIn;