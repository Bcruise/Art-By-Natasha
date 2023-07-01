import {useEffect, useState} from 'react';

function SubPage({Images}) {
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    window.addEventListener('load', function() {
      setPageLoaded(true);
    });
  });


  return (
        <div className="container">
          <div className="second-container col-12">
            {pageLoaded ? 
            <div className="row main-div col-10">

              {Images()}

            </div>
            : 
            <div className="spinning-circle"></div>}
          </div>
        </div>
  );
}

export default SubPage;