import {Player} from '@lottiefiles/react-lottie-player';
import Glitch from 'react-glitch-text';
import {FaUserFriends} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import bg from './bg.jpg'

function Detail() {
  return (
    <div className="container text-center my-5 p-5">
      <h1 style={{color: 'white', marginTop: '30px', marginBottom: '50px'}}>
        About Us
      </h1>
      <div className="row justify-content-center">
        <div className="col-sm-6" style={{marginTop: '0%'}}>
          <img
            className="img-fluid"
            style={{marginBottom: '50px'}}
            src={bg}
            alt="ietextrinity"
          />
        </div>
        <div className="col-sm-6">
          <div style={{color: 'white', textAlign: 'left'}}>
            <Glitch>
              {' '}
              <p>
                {/* Bit N Build is a 24 hour offline hackathon organized by Google Developer Students Club with
               endless
                 creativity. Students are challenged to further what they know by creating projects following                 their passions. Spending time on projects outside the classNameNameroom is the best way to not only
                 learn what you love, but also find new interests. */}
                Ctrl + Alt + Code is a 24-hour hackathon that offers coding enthusiasts the chance to create real-world applications. This hackathon promotes collaboration, encourages students to pursue careers in technology, and stimulates creativity to tackle various challenges faced by humanity. Unleash your potential and show us what you’ve got.
              </p>
            </Glitch>
            <div>
              <p
                className="my-4 container"
                style={{
                  backgroundColor: 'whitesmoke',
                  color: 'black',
                  borderRadius: '10px',
                  width: 'auto'
                }}
              >
                <Glitch fontSize="22px" color="black">
                  {' '}
                  <FaMapMarkerAlt style={{marginRight: '7px'}} />
                  PES University (RR-Campus), Bangalore
                </Glitch>
              </p>
              <p
                className=" container my-4"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '10px',
                  width: 'auto'
                }}
              >
                {' '}
                <Glitch fontSize="22px" color="black">
                  <FaClock style={{marginRight: '7px'}} /> Deadline: TBD
                </Glitch>
              </p>
              <p
                className=" container my-4"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '10px',
                  width: 'auto'
                }}
              >
                <Glitch fontSize="22px" color="black">
                  <FaUserFriends style={{marginRight: '7px'}} />
                  3-4 members per team{' '}
                </Glitch>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
