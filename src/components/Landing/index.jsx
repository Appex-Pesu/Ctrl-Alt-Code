import { useEffect, useState } from 'react';
import { TOP_SECTION } from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import CountdownTimer from './CountdownTimer';
import './style.css';

const Btn = (props) => {
  return (
    <button className={props.class}>
      <i className={props.icon}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 570);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 570);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="AboutMe">
      <h2>{isMobile ? '\u00A0\u00A0\u00A0Ctrl+Alt+Code' : 'Ctrl+Alt+Code'}</h2>
      <MytypedComponent />
      <h3>{TOP_SECTION.SHORT_DESCRIPTION}</h3>
      <h3>{TOP_SECTION.desc}</h3>
      <div
        className="d-inline-block apply-button"
        data-hackathon-slug="Ctrl+Alt+Code"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      ></div>
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <div className="main-content">
        <About />
      </div>
      <div className="timer-container">
        <CountdownTimer targetDate="2024-08-30T23:59:59" />
      </div>
    </div>
  );
};

export { Btn, Myinfo };
