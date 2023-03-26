import '../styling/LargeImageScroller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faX  } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function LargeImageScroller({testArray, testArrayNum, setTestArrayNum, ToggleLargeImage}) {  
  
  // scroll through the portfolio images
  const changeImage = () => {
    if (testArrayNum !== (testArray.length-1)) {
      setTestArrayNum( testArrayNum + 1 );
    } else {
      setTestArrayNum(0);
    }    
  }

  return (
    <div className="largeImage col-12">
        <div className="left p-3">
          <div className="left-inner-div">
            <div className="heart-div">
              <FontAwesomeIcon icon={faHeart} className="heart p-2"/>
              <span className="p-2">0</span>
            </div>
            <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={() => changeImage()}/>
          </div>
        </div> 
        {testArray.map(image => (image.id == testArrayNum && <img 
          src={image.image} 
          alt="img" 
          className="col-4"
        >
        </img>))}
        <div className="right p-3">
          <div className="right-inner-div">
            <button onClick={() => ToggleLargeImage()}>
              <FontAwesomeIcon icon={faX} className="X" />
            </button>
            <FontAwesomeIcon icon={faArrowRight} className="arrow" onClick={() => changeImage()}/>
          </div>
        </div>
    </div>
  );
}

export default LargeImageScroller;