import React from 'react';
import img from '../../banner/my-dp.png'

const About = () => {
    return (
        <div className='text-center container w-75 mt-5'>
            <img src={img} style={{ width: '300px' }} alt="" />
            <h4>S M Toufiq Islam</h4>
            <p><small>ittoufikit@gmail.com</small></p>
        </div>
    );
};

export default About;