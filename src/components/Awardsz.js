import Glitch from 'react-glitch-text';
import {useGlitch} from 'react-powerglitch';
import './style.css';

function PrizeHeading() {
  const glitch = useGlitch();
  return (
    <>
      <div className="container text-center p-5">
        <div>
          <h1
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Glitch color="lightGreen">Overall Prizes</Glitch>
          </h1>
        </div>
        <hr style={{ borderWidth: '5px', color: 'white' }} />
        <div className="row">
          <div
            className="col-sm-6 col-md-4 p-5"
            style={{ borderRadius: '30px', borderColor: 'purple' }}
          >
            <h2
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Glitch color="red">₹20,000/-</Glitch>
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{ fontSize: '25px' }} className="card-text">
                  Winners
                </p>
              </Glitch>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 p-5"
            style={{ borderRadius: '30px', borderColor: '00ffff' }}
          >
            <h2
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Glitch color="green">₹12,500/-</Glitch>
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{ fontSize: '25px' }} className="card-text">
                  1st Runner Ups
                </p>
              </Glitch>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 p-5"
            style={{ borderRadius: '30px', borderColor: '00ffff' }}
          >
            <h2
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Glitch color="blue">₹7,500/-</Glitch>
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{ fontSize: '25px' }} className="card-text">
                  2nd Runner Ups
                </p>
              </Glitch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrizeHeading;