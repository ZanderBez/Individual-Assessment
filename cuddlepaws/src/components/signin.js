import "../stylesheet/signin.css";
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (data) => {
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', data); 
      setMessage('Login successful');
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error);
      setMessage(error.response?.data.error || 'Server error');
      setLoading(false);
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="in-text">
          <h3>LOG IN</h3>
        </div>
        <div className="info">
          <Form onSubmit={handleSubmit(handleSignIn)}>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                {...register('email')}
                isInvalid={!!errors.email}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </FloatingLabel>
            <FloatingLabel className="mb-4" controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                {...register('password')}
                isInvalid={!!errors.password}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </FloatingLabel>
            <div className="in-info">
              <Link to="/signup">Don't have an account?</Link>
            </div>
            <Button className="btn-2" type="submit" disabled={loading}>
              {loading ? 'Signing In...' : 'SIGN IN'}
            </Button>
          </Form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
