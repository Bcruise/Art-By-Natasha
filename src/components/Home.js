import '../styling/Home.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LargeImageScroller from '../components/LargeImageScroller';
import Add from '../components/Add';
import SubPage from '../components/SubPage';
import $ from 'jquery'; 

//Images
import childrensBooksImg1 from '../images/Calendar.png';
import patternsImg1 from '../images/PlanMyDinnerPicture.png';
import commissionsImg1 from '../images/ReadMe.png';

function Home() {

  const [chosenPage, setChosenPage] = useState('');  
  
  const Images = () => {
    
      if (chosenPage === 'Home') {
        return <span>Home Pages images will go here</span>;
      } else if (chosenPage === 'Childrens Books') {
        return <img class="col-4" src={childrensBooksImg1} alt="img"></img>;
      } else if (chosenPage === 'Patterns') {
        return <img class="col-4" src={patternsImg1} alt="img"></img>;
      } else if (chosenPage === 'Commissions') {
        return <img class="col-4" src={commissionsImg1} alt="img"></img>;
      }
    
  };

  
  //change the selected image number for when going into LargeImageScroller
  const [allImagesNum, setAllImagesNum] = useState(0);
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
        <Navbar setChosenPage={setChosenPage}/>
          <SubPage chosenPage={chosenPage} Images={Images}/>
        <Footer /> 
      </div>
    
    
      <div className="largeImageHome faded">
          <LargeImageScroller  
            allImagesNum={allImagesNum} 
            setAllImagesNum={setAllImagesNum}
            ToggleLargeImage={ToggleLargeImage}
          />
        </div>

        {showAddPage && <Add setShowAddPage={setShowAddPage}/>}

    </>

  );
}

export default Home;