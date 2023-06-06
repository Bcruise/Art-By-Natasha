import '../styling/LargeImageScroller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faX  } from '@fortawesome/free-solid-svg-icons';

//Images
import { allImages } from '../data/images';
import { useEffect, useState } from 'react';

function LargeImageScroller({allImagesNum, setAllImagesNum, ToggleLargeImage}) {  
 
  
  // scroll through the portfolio images
  const changeImage = () => {
    const allImagesLength = allImages.find(obj => obj.title === 'all images').pictures.length;
    if (allImagesNum !== (allImagesLength-1)) {
      setAllImagesNum(allImagesNum + 1);
    } else {
      setAllImagesNum(0);
    }    
  };   

  const [chosenLargeImage, setChosenLargeImage] = useState();
  const chosenImage = () => {
    return (
      <>
        {allImages.flatMap(img => img.title === 'all images' ? img.pictures : []).map(img => img.id === allImagesNum &&
          <img src={img.image} alt="img" />
        )}
      </>
    );
  }

  return (
    <div className="largeImage col-12">
        <div className="left p-3">
          <div className="left-inner-div">
            <FontAwesomeIcon icon={faArrowLeft} className="arrow faded-item" onClick={() => changeImage()}/>
          </div>
        </div> 
        
        {chosenImage()}

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