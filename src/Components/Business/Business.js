import React from 'react';
import frist from '../Image/1.png'; 
import second from '../Image/2.png'; 
import third from '../Image/3.png'; 
import frouth from '../Image/4.png'; 
import './Business.css'

const  Business = () => {
    return (
        <div className='Business'>
            <h1>MILLIONS BUSINESS TRUST US</h1>
            <h3>TRY TO UNDERSTAND EXPECTION</h3>
            <p className='line'>_____ ____ ___</p>

            <img src={frist} alt='' />;
            <img src={second} alt='' />;
            <img src={third} alt='' />;
            <img src={frouth} alt='' />;

        </div>
    );
};

export default  Business