import '../styling/Home.css';
import { useState } from 'react';
import img from '../images/Calendar.png';
import img1 from '../images/ReadMe.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LargeImageScroller from '../components/LargeImageScroller';

function Home() {

  const testArray = [{image: img, id: 0},{image: img1, id: 1},{image: img, id: 2},{image: img1, id: 3},{image: img, id: 4}];
  //change the selected image number for when going into LargeImageScroller
  const [testArrayNum, setTestArrayNum] = useState(0);
  const [showLargeImageScroller, setShowLargeImageScroller] = useState(false);
  const [fadeOutInOrNeither, setFadeOutInOrNeither] = useState('Neither');

  return (
    <>
      {!showLargeImageScroller && 
      <div className={fadeOutInOrNeither == 'Going To Home' && {fadeIn}}>
        <Navbar />
         <div className="container">
          <div className="row main-div col-12">
            {testArray.map(image => 
              <img className="col-4" 
                src={image.image}
                alt="img"
                onClick={() => {setShowLargeImageScroller(true); setTestArrayNum(image.id); setFadeOutInOrNeither('Going To Image')}}
              ></img>
            )}
          </div>
        </div>
        <Footer />
      </div>}
      {showLargeImageScroller && 
      <div className={fadeOutInOrNeither == 'Going To Image' ? fadeIn : fadeOut}>
        <LargeImageScroller 
          setShowLargeImageScroller={setShowLargeImageScroller} 
          testArray={testArray} 
          testArrayNum={testArrayNum} 
          setTestArrayNum={setTestArrayNum}
          setFadeOutInOrNeither={setFadeOutInOrNeither}
        />
      </div>
      }
    </>
  );
}

export default Home;