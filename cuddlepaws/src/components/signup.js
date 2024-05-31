// src/components/Signup.js
import "../stylesheet/signup.css";
import { useState, useContext } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSignUp = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', data, { timeout: 5000 });
      console.log('User created successfully:', response.data);
      login(response.data);
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error);
      setLoading(false);
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="up-text">
          <h3>SIGN UP</h3>
        </div>
        <div className="info">
          <Form onSubmit={handleSubmit(handleSignUp)}>
            <FloatingLabel className="mb-4" controlId="floatingName" label="Username">
              <Form.Control type="text" placeholder="name" {...register('name')} />
              {errors.name && <p>{errors.name.message}</p>}
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-4">
              <Form.Control type="email" placeholder="name@example.com" {...register('email')} />
              {errors.email && <p>{errors.email.message}</p>}
            </FloatingLabel>
            <FloatingLabel className="mb-4" controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" {...register('password')} />
              {errors.password && <p>{errors.password.message}</p>}
            </FloatingLabel>
            <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password">
              <Form.Control type="password" placeholder="Password" {...register('confirmPassword')} />
              {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </FloatingLabel>
            <Button className="btn-1" type="submit" disabled={loading}>
              {loading ? 'Signing Up...' : 'SIGN UP'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
