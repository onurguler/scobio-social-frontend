import React, { Fragment } from 'react';

function Contact() {
  return (
    <Fragment>
      <div className="text-center mt-4">
        <h4>Bize Ulaşın</h4>
      </div>
      <div class="contact-us">
        <div class="container">
          <div class="contact-form">
            <div class="row">
              <div class="col-sm-7">
                <form id="ajax-contact">
                  <div class="messages" id="form-messages"></div>
                  <div class="controls">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_name">Ad *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Adınızı giriniz."
                            required="required"
                            data-error="Firstname is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_lastname">Soyad *</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            class="form-control"
                            placeholder="Soyadınızı giriniz."
                            required="required"
                            data-error="Lastname is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Email adresinizi giriniz."
                            required="required"
                            data-error="Valid email is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_phone">Telefon Numarası *</label>
                          <input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            class="form-control"
                            placeholder="Telefon numaranızı giriniz."
                            required
                            oninvalid="setCustomValidity('Plz enter your correct phone number ')"
                            onchange="try{setCustomValidity('')}catch(e){}"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="form_message">Mesaj *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Mesajınızı yazınız."
                            rows="4"
                            required="required"
                            data-error="Please,leave us a message."></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <input
                          type="submit"
                          class="btn btn-primary"
                          value="Gönder"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <br />
                        <small class="text-muted">
                          <strong>*</strong> Bu alanlar boş bırakılmamalıdır.
                        </small>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-sm-5">
                <div class="row">
                  <div class="col-xs-3">
                    <i class="fa fa-map-marker font-xl"></i>  
                  </div>
                  <div class="col-xs-9">
                    <p className="text-center">
                      {' '}
                      Süleyman Demirel Cd., 32260 Merkez/Isparta{' '}
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-3 mt-3">
                    <i class="fa fa-envelope"></i>   Email
                  </div>
                  <div class="col-sm-9">
                    <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>{' '}
                    <br />{' '}
                    <a href="mailto:support@yourdomain.com">
                      support@yourdomain.com
                    </a>
                  </div>
                </div>
                <br />
                <iframe
                  title="abc"
                  width="100%"
                  height="250"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?q=Suleyman%20Demirel%20University&t=&z=17&ie=UTF8&iwloc=&output=embed">
                  >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
