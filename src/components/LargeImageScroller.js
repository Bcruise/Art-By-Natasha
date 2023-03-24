import '../styling/LargeImageScroller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faX  } from '@fortawesome/free-solid-svg-icons';
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
          <div className="heart-div">
            <FontAwesomeIcon icon={faHeart} className="heart p-2"/>
            <span className="p-2">0</span>
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
            <FontAwesomeIcon icon={faX} className="X" onClick={() => ToggleLargeImage()}/>
            <FontAwesomeIcon icon={faArrowRight} className="arrow" onClick={() => changeImage()}/>
          </div>
        </div>
    </div>
  );
}

export default LargeImageScroller;