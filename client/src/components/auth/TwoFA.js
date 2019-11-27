import React, { Fragment } from 'react';
import tfa_icon from '../../assets/img/2fa_icon.png';

const TwoFA = () => {
  return (
    <Fragment>
      <div className="justify-content-center">
        <form className="justify-content-center vertical-center">
          <img
            width="210"
            height="230"
            //className="img-fluid vh-100 d-none d-lg-block fit-image"
            src={tfa_icon}
          />
          <div className="col-5">
            <p className="d-flex text-center">
              Google Authentication uygulamasında beliren kodu giriniz.
            </p>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Kod"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default TwoFA;
