import '../styling/LargeImageScroller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faX  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

//Images
import { allImages } from '../data/images';

function LargeImageScroller({allImagesNum, ToggleLargeImage, ChangeImage}) {   

  const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;
  
    const onTouchStart = (e) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    }
  
    const onTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;
      if (isLeftSwipe) {
        ChangeImage('left');
      } else if (isRightSwipe) {
        ChangeImage('right');
      }
    }

  const chosenImage = () => {

    return (
      <>
        {allImages.flatMap(img => img.title === 'all images' ? img.pictures : []).map(img => img.id === allImagesNum &&
          <>
            <img src={img.image} alt="img" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} />
          </>
        )}
      </>
    );
  }

  return (
    <div className="largeImage col-12">

        <div className="top-large-image p-1">
          <button onClick={() => ToggleLargeImage()}>
            <FontAwesomeIcon icon={faX} className="X-sm" />
          </button>
        </div>

        <div className="left col-2 p-3">
          <div className="left-inner-div">
            <FontAwesomeIcon icon={faArrowLeft} className="arrow faded-item" onClick={() => ChangeImage()}/>
          </div>
        </div> 
        
        {chosenImage()}

        <div className="right col-2 p-3">
          <div className="right-inner-div">
            <button onClick={() => ToggleLargeImage()}>
              <FontAwesomeIcon icon={faX} className="X faded-item" />
            </button>
            <FontAwesomeIcon icon={faArrowRight} className="arrow faded-item" onClick={() => ChangeImage()}/>
          </div>
        </div>

        <div className="bottom-large-image p-1"></div>

    </div>
  );
}

export default LargeImageScroller;