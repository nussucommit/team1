import { Button } from "../../Navbar/Button";
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function LogInForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please fill up this form to log in.</p>
        <form>
          <label for="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />
          <br/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <br/>

          <button type="submit" class="login">Log In</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default LogInForm;
