import React from 'react'
import Glitch from 'react-glitch-text';

function Foot() {
  return (
    <div style={{borderColor: 'white', color: 'white'}}>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div
              className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4"
              style={{
                marginBottom: '20px'
              }}
            >
              <h2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                className="text-uppercase fw-bold mb-4"
              >
                <Glitch fontSize="20px">
                  <i className="fas fa-map-marker-alt me-3"></i>
                  Pin location
                </Glitch>
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.573875735365!2d77.53346577582614!3d12.935086915676319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1721993834890!5m2!1sen!2sin"
                style={{
                  width: '300',
                  height: '200',
                  border: '0',
                  allowFullScreen: '',
                  loading: 'lazy',
                  referrerPolicy: 'no-referrer-when-downgrade'
                }}
              ></iframe>
            </div>

            <div
              className="col-md-3 col-lg-6 col-xl-6 mx-auto mb-4"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Glitch>
                <h2 className="text-uppercase fw-bold mb-4">Useful links</h2>
                <p>
                  <a href="#prizes" className="text-reset">
                    Prizes
                  </a>
                </p>{' '}
                <p>
                  {' '}
                  <a href="#faqs" className="text-reset">
                    Faq's
                  </a>
                </p>{' '}
                <p>
                  <a href="#sponsors" className="text-reset">
                    Sponsors
                  </a>
                </p>
              </Glitch>
            </div>

            <div
              className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Glitch>
                <h2 className="text-uppercase fw-bold mb-4">Contact</h2>

                <p>
                  <i className="fas fa-envelope me-6"></i>{' '}
                  appexpesu5@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone "></i> Sanjana - +91 70227 61027
                </p>
                <p>
                  <i className="fas fa-phone"></i> Sharanya -
                  +91 73493 91048
                </p>
              </Glitch>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: 'black'}}>
        <h2>
          {' '}
          ©2023 Copyright&nbsp; : &nbsp;
          <a
            className="text-reset fw-bold"
            href="https://appex-pesu.vercel.app"
          >
            Appex PESU
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Foot
