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
  const ChangeImage = (direction) => {
    const allImagesLength = allImages.find(obj => obj.title === 'all images').pictures.length;
    console.log(direction)
    if (allImagesNum !== (allImagesLength-1)) {
      if (direction === 'left') {
        setAllImagesNum(allImagesNum - 1);
      } else if (direction === 'right' || direction === '') {
        setAllImagesNum(allImagesNum + 1);
      }
    } else {
      setAllImagesNum(0);
    }    
  };
  
  const Images = () => {
    
      if (chosenPage === 'Home' || chosenPage === '') {
        return (
          <>
            {allImages.flatMap(img => img.title === 'all images' ? img.pictures : []).map(img => 
              <img className="col-4 home-image" src={img.image} 
              onClick={() => {setAllImagesNum(img.id) ; ToggleLargeImage()}} alt="img" />
            )}
          </>
        );
      } else if (chosenPage === 'Childrens Books') {
        const imagesToShow = allImages.find(obj => obj.title === "childrens books").pictures;
        return (
          <>
            {imagesToShow.map(obj => <img className="col-4 sub-image" src={obj} alt="img"/>
            )}
          </>
        )
      } else if (chosenPage === 'Patterns') {
        const imagesToShow = allImages.find(obj => obj.title === "patterns").pictures;
        return (
          <>
            {imagesToShow.map(obj => <img className="col-4 sub-image" src={obj} alt="img"/>)}
          </>
        )
      } else if (chosenPage === 'Commissions') {
        const imagesToShow = allImages.find(obj => obj.title === "commissions").pictures;
        return (
          <>
            {imagesToShow.map(obj => <img className="col-4 sub-image" src={obj} alt="img"/>)}
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
            ChangeImage={ChangeImage}
          />
        </div>

    </>

  );
}

export default Home;