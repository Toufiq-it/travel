import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='text-center mt-5'>
            <p><small>copyright @ {year}

            <>
            <a style={{ textDecoration: 'none' }} href="#"> ittoufikit@gmail.com </a>
            </>

            <span>All Right Reserved</span>
            </small></p>
        </footer>
    );
};

export default Footer;