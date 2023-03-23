import '../styling/LargeImageScroller.css';
import img from '../images/Calendar.png';
import img1 from '../images/ReadMe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function LargeImageScroller() {  
  const testArray = [img,img1,img,img1,img,img1,img,img1,img];
  //change image  
  let shownImage = testArray[0];
  let index = 0;
  const changeImage = () => {
    index ++;
    shownImage = testArray[index];
  }
  
  return (
    <div className="largeImage col-12">
        <div className="left">
        
        </div> 
        <img 
          src={shownImage} 
          alt="img" 
          className="col-4" 
          onClick={changeImage}>
        </img>
        <div className="right">
          <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
        </div>
    </div>
  );
}

export default LargeImageScroller;