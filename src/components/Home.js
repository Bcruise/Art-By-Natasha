import '../styling/Home.css';
import '../styling/LargeImageScroller.css';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LargeImageScroller from '../components/LargeImageScroller';
import SubPage from '../components/SubPage';
import $ from 'jquery'; 
import { allImages } from '../data/images';

function Home() {
  
  const [chosenPage, setChosenPage] = useState('');  
  
  //change the selected image number for when going into LargeImageScroller
  const [allImagesNum, setAllImagesNum] = useState(0);
  
  
  //Swipe Effect
  const ChangeImage = () => {
    const allImagesLength = allImages.find(obj => obj.title === 'all images').pictures.length;
    if (allImagesNum !== (allImagesLength-1)) {
      setAllImagesNum(allImagesNum + 1);
    } else {
      setAllImagesNum(0);
    }    
  };   

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) {
      ChangeImage()
    }
  }
  
  const Images = () => {
    
      if (chosenPage === 'Home' || chosenPage === '') {
        return (
          <>
            {allImages.flatMap(img => img.title === 'all images' ? img.pictures : []).map(img => 
              <img className="col-4 home-image" src={img.image} 
              onClick={() => {setAllImagesNum(img.id) ; ToggleLargeImage()}} alt="img" 
              onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}/>
            )}
          </>
        );
      } else if (chosenPage === 'Childrens Books') {
        const imagesToShow = allImages.find(obj => obj.title === "childrens books").pictures;
        return (
          <>
            {imagesToShow.map(obj => <img className="col-4 sub-image" src={obj} alt="img" 
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}/>)}
          </>
        )
      } else if (chosenPage === 'Patterns') {
        const imagesToShow = allImages.find(obj => obj.title === "patterns").pictures;
        return (
          <>
            {imagesToShow.map(obj => <img className="col-4 sub-image" src={obj} alt="img" 
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}/>)}
          </>
        )
      } else if (chosenPage === 'Commissions') {
        const imagesToShow = allImages.find(obj => obj.title === "commissions").pictures;
        return (
          <>
            {imagesToShow.map(obj => <img className="col-4 sub-image" src={obj} alt="img" 
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}/>)}
          </>
        )
      }  
  };
      
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
            setChosenPage={setChosenPage}
            changeImage={ChangeImage}
          />
        </div>

    </>

  );
}

export default Home;