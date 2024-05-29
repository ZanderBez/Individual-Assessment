import "../stylesheet/signin.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function signin(){
    return(
        <div>
            <div className="form">
            <div className="form-container">
                <div className="in-text">
                    <h3>LOG IN</h3>
                </div>
                <div className="info">
                    <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-4">
                     <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                    <FloatingLabel className="mb-4" controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <div className="in-info">
                    <Link to='/signup'>
                    Have an account?
                    </Link></div>
                <Button className="btn-2" type="submit">
                    SIGN IN
                </Button>
                </Form>
                </div>
            </div>
        </div>
        </div>
    )
}


export default signin;