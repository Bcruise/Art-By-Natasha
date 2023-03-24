import '../styling/Add.css';

function Add({setShowAddPage}) {
  return (
    <div className="login">
      <div className="login-inner-div col-6">
        <div className="title-div">
          <div className="title-span-div">
            <span>Add</span>
          </div>
          <div className="title-x-div">
            <div onClick={() => setShowAddPage(false)}>X</div>
          </div>
        </div>
        <div className="input-container">
          <select>
            <option>Portfolio image</option>
            <option>Childrens book</option>
            <option>Patterns</option>
            <option>Commissions</option>
          </select>
        </div>
        <div className="input-container">
          <label></label>
          <input className="col-10"></input>
        </div>
        <div className="input-container">
          <label></label>
          <input className="col-10"></input>
        </div>
        <div className="input-container">
          <label></label>
          <input className="col-10"></input>
        </div>
      </div>
    </div>
  );
}

export default Add;