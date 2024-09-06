import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Googlelogin = () => {
    const {googleLogin} = useAuth();
    const handleGoogleLogin = () =>{
        googleLogin();
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}><img class="w-24 h-8 mr-2 lg:ml-36 items-center" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo"/></button>
        </div>
    );
};

export default Googlelogin;