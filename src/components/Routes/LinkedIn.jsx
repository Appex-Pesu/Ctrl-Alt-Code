import React, {useEffect} from 'react';

function Linkedin() {
  useEffect(() => {
    window.location.href = 'https://www.linkedin.com/company/appex-pesu/?originalSubdomain=in';
  }, []);
  return <div></div>;
}

export default Linkedin;
