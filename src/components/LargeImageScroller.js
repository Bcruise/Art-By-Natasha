import '../styling/LargeImageScroller.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faX  } from '@fortawesome/free-solid-svg-icons';

//Images
import { allImages } from '../data/images';

function LargeImageScroller({allImagesNum, ToggleLargeImage, ChangeImage}) {  
 
  
  

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
    </div>
  );
}

export default LargeImageScroller;