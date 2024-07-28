import { Player } from '@lottiefiles/react-lottie-player';

function Domains() {
  return (
    <>
      <div className="container text-center my-5">
        <h1 style={{ color: 'white', marginTop: '50px' }}>Tracks</h1>
        <div className="row justify-content-center mb-5">
          <div className="col-sm-6 col-xl-4 p-5 px-xl-4">
            <h1 style={{ color: 'white' }}>GenAI & ML</h1>
            <Player
              src="https://lottie.host/97d5a331-e866-46f0-a5fd-855426b36cfe/uFVawog4ZA.json"
              className="player"
              loop
              autoplay
            />
          </div>
          <div className="col-sm-6 col-xl-4 p-5 px-xl-4">
            <h1 style={{ color: 'white' }}>Web3</h1>
            {/* <h2 style={{ color: 'white' }}>And Cybersecurity</h2> */}
            <Player
              src="https://assets8.lottiefiles.com/packages/lf20_8jmombpq.json"
              className="player"
              loop
              autoplay
            />
          </div>
          <div className="col-sm-6 col-xl-4 p-5 px-xl-4">
            <h1 style={{ color: 'white' }}>Web/App Dev</h1>
            <Player
              src="https://assets4.lottiefiles.com/packages/lf20_foZ22A.json"
              className="player"
              loop
              autoplay
            />
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="col-sm-6 col-xl-4 p-5 px-xl-4">
            <h1 style={{ color: 'white' }}>EdTech</h1>
            <Player
              src="https://lottie.host/821f57a8-d4f7-4b7b-81c6-78c9fae00e8b/Ny0Q7JfS6g.json"
              className="player"
              loop
              autoplay
            />
          </div>
          <div className="col-sm-6 col-xl-4 p-5 px-xl-4">
            <h1 style={{ color: 'white' }}>AR/VR</h1>
            <Player
              src="https://lottie.host/19de7402-b5ca-4b6e-b524-7cf1598d66c7/BTPFjLnmJM.json"
              className="player"
              loop
              autoplay
            />
          </div>
          <div className="col-sm-6 col-xl-4 p-5 px-xl-4">
            <h1 style={{ color: 'white' }}>Open Innovation</h1>
            <Player
              src="https://lottie.host/1403d0cc-4ba8-44cb-933c-f653e6367034/ZkmHLKes09.json"
              className="player"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Domains;
