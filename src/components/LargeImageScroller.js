import '../styling/LargeImageScroller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faX  } from '@fortawesome/free-solid-svg-icons';

//Images
import { allImages } from '../data/images';
import { useEffect, useState } from 'react';

function LargeImageScroller({allImagesNum, setAllImagesNum, ToggleLargeImage}) {  

  const [allImagesLength, setAllImagesLength] = useState(0);
  useEffect(() => {
    for (let a = 0; a < allImages.length; a++) {
      setAllImagesLength(allImagesLength + allImages[a].pictures.length);
    }
  }, []);
  
  // scroll through the portfolio images
  const changeImage = () => {
    if (allImagesNum !== (0-1)) {
      //CHANGE THE ABOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      setAllImagesNum( allImagesNum + 1 );
    } else {
      setAllImagesNum(0);
    }    
  };   

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