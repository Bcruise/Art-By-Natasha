/* {testArray.map(image => 
                <img className="col-4" 
                  src={image.image}
                  alt="img"
                  onClick={() => {setTestArrayNum(image.id); ToggleLargeImage()}}
                ></img>
              )}*/


function SubPage({Images}) {
  
  return (
        <div className="container">
          <div className="second-container col-12">
            <div className="row main-div col-10">
             
              {Images()}

            </div>
          </div>
        </div>
  );
}

export default SubPage;