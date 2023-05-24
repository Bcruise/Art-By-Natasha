import '../styling/Navbar.css';
import data from '../data/data.json';

function Navbar() {
  console.log(data[0].title)
  return (
    <div className="nav-bar">
      <div className="container navbar-container">
        <div className="col-12 top">
        Hello
        </div>
        <div className="col-10 bottom">
          {data.map(item => 
            <span className="col-4">{item.title}</span>  
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;