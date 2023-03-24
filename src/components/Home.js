import '../styling/Home.css';
import { useState } from 'react';
import img from '../images/Calendar.png';
import img1 from '../images/ReadMe.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LargeImageScroller from '../components/LargeImageScroller';
import Add from '../components/Add';
import $ from 'jquery'; 

function Home() {

  const testArray = [{image: img, id: 0},{image: img1, id: 1},{image: img, id: 2},{image: img1, id: 3},{image: img, id: 4}];
  //change the selected image number for when going into LargeImageScroller
  const [testArrayNum, setTestArrayNum] = useState(0);
  const [showAddPage, setShowAddPage] = useState(false) ;
  
  //load add page on ctrl + enter
  document.addEventListener('keydown',(e)=>{
    if(e.ctrlKey && e.key === 'Enter') {
      setShowAddPage(true);
    }
  });

  // Toggle between home and large image pages
  const ToggleLargeImage = () => {
    const home = $('.home');
    if (home[0].style.display === '') {
      $('.largeImageHome').css({
        display: 'unset',
        animation: 'fadeIn 3s'
    });
      $('.home').css({
        display: 'none',
        animation: 'fadeOut 3s'
    });
    } else {
      $('.largeImageHome').css({
        display: 'none',
        animation: 'fadeOut 3s'
    });
    $('.home').css({
      display: '',
      animation: 'fadeIn 3s'
  });
    }
  }

  return (

    <>
      <div className="home">
        <Navbar />
         <div className="container">
          <div className="row main-div col-12">
            {testArray.map(image => 
              <img className="col-4" 
                src={image.image}
                alt="img"
                onClick={() => {setTestArrayNum(image.id); ToggleLargeImage()}}
              ></img>
            )}
          </div>
        </div>
        <Footer /> 
      </div>
    
    
      <div className="largeImageHome">
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