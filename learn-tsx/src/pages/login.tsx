import React, { useState } from 'react';



const Login = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    };
    console.log("mout");

    return (
        <div className='w-screen h-screen'>
            <span className='w-200 h-200 inline-block bg-red-100'>hello</span>
            <span className='w-200 h-200 inline-block bg-red-100'>hello</span>
        </div>
    );
};

export default Login;
