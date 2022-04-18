import React, { useRef } from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();


    const navigateLogin = () => {
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='container responsive-width w-50 mx-auto'>
            <h2 className='text-primary text-center fw-bold mt-2'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="name" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account ? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;