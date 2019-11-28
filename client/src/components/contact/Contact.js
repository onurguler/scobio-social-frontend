import React, { Fragment } from 'react';

function Contact() {
  return (
    <Fragment>
      <div>
        <div className="text-center mt-4">
          <h4>Bize Ulaşın</h4>
        </div>
        <div>
          <div class="container">
            <div class="row">
              <div class="col">
                <form>
                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label for="fname">Ad</label>
                        <input type="text" name="fname" class="form-control" />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label for="lname">Soyad</label>
                        <input type="text" name="lname" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" name="email" class="form-control" />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label for="subject">Konu</label>
                        <select name="subject" class="form-control">
                          <option>Genel</option>
                          <option>Tavsiye</option>
                          <option>Şikayet</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="message">Mesaj</label>
                      <textarea
                        class="form-control"
                        name="message"
                        rows="10"></textarea>
                    </div>
                    <div class="text-center">
                      <input
                        type="submit"
                        class="btn btn-primary w-25"
                        value="Gönder"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
