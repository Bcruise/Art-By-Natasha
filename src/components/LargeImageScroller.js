import '../styling/LargeImageScroller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faX  } from '@fortawesome/free-solid-svg-icons';

//Images
import childrensBooksImg1 from '../images/Calendar.png';
import patternsImg1 from '../images/PlanMyDinnerPicture.png';
import commissionsImg1 from '../images/ReadMe.png';

function LargeImageScroller({allImagesNum, setAllImagesNum, ToggleLargeImage}) {  
  
  // scroll through the portfolio images
  const changeImage = () => {
    if (allImagesNum !== (0-1)) {
      //CHANGE THE ABOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      setAllImagesNum( allImagesNum + 1 );
    } else {
      setAllImagesNum(0);
    }    
  };   

  // images object
  const allImages = [
    {
      "image": childrensBooksImg1,
      "id": 0
    },
    {
      "image": patternsImg1,
      "id": 1
    },
    {
      "image": commissionsImg1,
      "id": 2
    },
  ]
  
  return (
    <div className="largeImage col-12">
        <div className="left p-3">
          <div className="left-inner-div">
            <FontAwesomeIcon icon={faArrowLeft} className="arrow faded-item" onClick={() => changeImage()}/>
          </div>
        </div> 
        
        {allImages.map(image => (image.id === allImagesNum && <img 
          src={image.image} 
          alt="img" 
          className="col-4"
        >
        </img>))}

        <div className="right p-3">
          <div className="right-inner-div">
            <button onClick={() => ToggleLargeImage()}>
              <FontAwesomeIcon icon={faX} className="X faded-item" />
            </button>
            <FontAwesomeIcon icon={faArrowRight} className="arrow faded-item" onClick={() => changeImage()}/>
          </div>
        </div>
    </div>
  );
}

export default LargeImageScroller;