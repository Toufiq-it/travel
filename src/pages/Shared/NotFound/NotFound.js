import React from 'react';
import notFound from '../../../logo/404-error-page.png'

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <img className='mb-5' width={500} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;