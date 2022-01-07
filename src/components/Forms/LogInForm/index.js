import React from "react";
import { Button } from "../../Navbar/Button";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const LogInForm = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Button type="button" onClick={handleClose}>
          Close
        </Button>
      </section>
    </div>
  );
};

export default LogInForm;

// Credits to https://www.digitalocean.com/community/tutorials/react-modal-component

// const FormPage = () => {
// return (
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6">
//       <form>
//         <p className="h4 text-center mb-4">Sign in</p>
//         <label htmlFor="defaultFormLoginUsernameEx" className="grey-text">
//           Username
//         </label>
//         <input type="text" id="defaultFormLoginUsernameEx" className="form-control" />
//         <br />
//         <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
//           Password
//         </label>
//         <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
//         <div className="text-center mt-4">
//           <MDBBtn color="indigo" type="submit">Login</MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// );
// };

// Credits to: https://mdbootstrap.com/docs/react/forms/basic/