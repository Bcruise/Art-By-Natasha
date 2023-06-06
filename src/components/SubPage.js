
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