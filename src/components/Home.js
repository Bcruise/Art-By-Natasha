import '../styling/Home.css';
import { useState } from 'react';
import img from '../images/Calendar.png';
import img1 from '../images/ReadMe.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LargeImageScroller from '../components/LargeImageScroller';
import Add from '../components/Add';
import SubPage from '../components/SubPage';
import $ from 'jquery'; 

function Home() {

  const testArray = [{image: img, id: 0},{image: img1, id: 1},{image: img, id: 2},{image: img1, id: 3},{image: img, id: 4}];
  //change the selected image number for when going into LargeImageScroller
  const [testArrayNum, setTestArrayNum] = useState(0);
  const [showAddPage, setShowAddPage] = useState(false);
  
  //load add page on ctrl + enter
  document.addEventListener('keydown',(e)=>{
    if(e.ctrlKey && e.key === 'Enter') {
      setShowAddPage(true);
    }
  });
  
  // Toggle between home and large image pages
  const ToggleLargeImage = () => {
    if($('.home')[0].style.opacity === '' || $('.home')[0].style.opacity == 1) {

      $('.largeImageHome').css({        
        display: 'unset',
        opacity: 1
      });

      $('.home').css({
        opacity: 0,
        overflowY: 'hidden'
      })
      
      setTimeout(function () {
        $('.home').css({
          display: 'none'
        });
      },1500);

    } else if ($('.home')[0].style.opacity == 0) {
      $('.largeImageHome').css({
        opacity: 0
      });

      $('.home').css({
        opacity: 0,
        display: 'unset',
        overflowY: 'unset'
      });

      setTimeout(function () {
        $('.home').css({
          opacity: 1,
        });
      },100)

      setTimeout(function () {
        $('.largeImageHome').css({
          display: 'none'
        });
      },1500)
    }
  }

  return (

    <>
      <div className="home faded">
        <Navbar />
         <div className="container">
          <div className="second-container col-12">
            <div className="row main-div col-10">
              {testArray.map(image => 
                <img className="col-4" 
                  src={image.image}
                  alt="img"
                  onClick={() => {setTestArrayNum(image.id); ToggleLargeImage()}}
                ></img>
              )}
            </div>
          </div>
        </div>
        <Footer /> 
      </div>
    
    
      <div className="largeImageHome faded">
          <LargeImageScroller  
            testArray={testArray} 
            testArrayNum={testArrayNum} 
            setTestArrayNum={setTestArrayNum}
            ToggleLargeImage={ToggleLargeImage}
          />
        </div>

        {showAddPage && <Add setShowAddPage={setShowAddPage}/>}

    </>

  );
}

export default Home;