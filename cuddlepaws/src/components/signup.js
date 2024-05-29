import "../stylesheet/signup.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup() {
    return (
        <div className="form">
            <div className="form-container">
                <div className="up-text">
                    <h3>SIGN UP</h3>
                </div>
                <div className="info">
                    <Form>
                <FloatingLabel className="mb-4"  controlId="floatingName" label="Username">
                        <Form.Control type="name" placeholder="name" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-4">
                     <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                    <FloatingLabel className="mb-4" controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel  controlId="floatingPassword" label="Confirm Password">
                        <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button className="btn-1" type="submit">
                    SIGN UP
                </Button>
                </Form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
