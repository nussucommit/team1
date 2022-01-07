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
          
          <div class="form-group">
            <label for="email"><b>Email</b></label>
            <input class="form-control" type="email" placeholder="Enter Email" name="email" required />
            <br/>
          </div>

          <div class="form-group">
            <label for="psw"><b>Password</b></label>
            <input class="form-control" type="password" placeholder="Enter Password" name="psw" required />
            <br/>
          </div>

          <button class="btn btn-primary" type="submit">Log In</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default LogInForm;
