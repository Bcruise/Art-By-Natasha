import '../styling/Home.css';
import img from '../images/Calendar.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Home() {
  const testArray = [img,img,img,img,img,img,img,img,img];
  return (
    <>
      <Navbar />
        <div className="container">
          <div className="row main-div col-12">
            {testArray.map(image => 
              <img className="col-4" src={image} alt="img"></img>
            )}
          </div>
        </div>
      <Footer />
    </>
  );
}

export default Home;