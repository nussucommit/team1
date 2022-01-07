import React from "react";
import { Button } from "../../Navbar/Button";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const SignUpForm = ({ handleClose, show, children }) => {
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

export default SignUpForm;

// Credits to: https://mdbootstrap.com/docs/react/forms/basic/
// const FormPage = () => {

  // return (
  // <MDBContainer>
  //   <MDBRow>
  //     <MDBCol md="6">
  //       <form>
  //         <p className="h4 text-center mb-4">Sign up</p>
  //         <label htmlFor="defaultFormRegisterUsernameEx" className="grey-text">
  //           Username
  //         </label>
  //         <input type="text" id="defaultFormRegisterUsernameEx" className="form-control" />
  //         <br />
  //         <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
  //           Email
  //         </label>
  //         <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
  //         <br />
  //         <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
  //           Confirm email
  //         </label>
  //         <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
  //         <br />
  //         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
  //           Password
  //         </label>
  //         <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
  //         <div className="text-center mt-4">
  //           <MDBBtn color="unique" type="submit">
  //             Register
  //           </MDBBtn>
  //         </div>
  //       </form>
  //     </MDBCol>
  //   </MDBRow>
  // </MDBContainer>
  // );
  // };