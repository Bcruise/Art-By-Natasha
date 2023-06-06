import '../styling/Home.css';
import '../styling/LargeImageScroller.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LargeImageScroller from '../components/LargeImageScroller';
import Add from '../components/Add';
import SubPage from '../components/SubPage';
import $ from 'jquery'; 
import { allImages } from '../data/images';

function Home() {
  
  const [chosenPage, setChosenPage] = useState('');  
  
  const Images = () => {

    const everyPicture = allImages.flatMap(img => img.title === 'all images' ? img.pictures : []);

      if (chosenPage === 'Home' || chosenPage === '') {
        return (
          <>
            {allImages.flatMap(im => img.title === 'all images' ? img.pictures : []).map(img => 
              <img className="col-4" src={img.image} onClick={() => {setAllImagesNum(img.id); ToggleLargeImage()}} alt="img" />
            )}
          </>
        );
      } else if (chosenPage === 'Childrens Books') {
        return (
          <>
            {allImages.map(obj => obj.title === 'childrens books' && <img className="col-4" src={obj.image} onClick={() => {setAllImagesNum(obj.id); ToggleLargeImage()}} alt="img" />)}
          </>
        )
      } else if (chosenPage === 'Patterns') {
        return <img class="col-4" src={allImages[1].pictures[0]} alt="img"></img>;
      } else if (chosenPage === 'Commissions') {
        return <img class="col-4" src={allImages[2].pictures[0]} alt="img"></img>;
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
        opacity: 1,
        display: 'unset'
      });

      $('.home').css({
        opacity: 0,
        overflowY: 'hidden'
      });

      $('.arrow').css({        
        opacity: 0,
        display: 'none'
      });

      $('.X').css({        
        opacity: 0,
        display: 'none'
      });

      $('body').css({
        pointerEvents: 'none'
      })
      
      setTimeout(function () {
        $('.arrow').css({        
          display: 'unset'
        });
        $('.X').css({
          display: 'unset'
        });
      },1000);

      setTimeout(function () {
        $('.home').css({
          display: 'none'
        });
        $('.arrow').css({        
          opacity: 1
        });
        $('.X').css({        
          opacity: 1
        });
        $('body').css({
          pointerEvents: 'unset'
        });
      },2000);

    } else if ($('.home')[0].style.opacity == 0) {
      $('.largeImageHome').css({
        opacity: 0
      });

      $('.home').css({
        opacity: 0,
        display: 'unset',
        overflowY: 'unset'
      });

      $('body').css({
        pointerEvents: 'none'
      });

      setTimeout(function () {
        $('.home').css({
          opacity: 1,
        });
      },100)

      setTimeout(function () {
        $('body').css({
          pointerEvents: 'unset'
        });
      },2000)
    }
  }

  return (

    <>
      <div className="home faded">
        <Navbar setChosenPage={setChosenPage}/>
          <SubPage Images={Images} />
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