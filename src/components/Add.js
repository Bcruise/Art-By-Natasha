import { useState } from 'react';
import '../styling/Add.css';
import $ from 'jquery';

function Add({setShowAddPage}) {
  const [hideURLOption, setHideURLOption] = useState(true);
  const [imageURLObject, setImageURLObject] = useState({
    image: '',
    URL: ''
  })

  const ToggleURLOption = (e) => {
    if (e === 'Portfolio image') {
      setHideURLOption(true);
    } else {
      setHideURLOption(false);
    }
  }

  //Send image and URL to the server using AJAX
  const SendToServer = () => {
    $.ajax({
      url: '/upload',
      type: 'POST',
      data: imageURLObject,
      processData: false,
      contentType: false,
      success: function(data) {
        alert('Upload successful');
      }
    })
  }

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
        <div className="input-container p-2">
          <select onChange={(e) => ToggleURLOption(e.target.value)}>
            <option>Portfolio image</option>
            <option>Childrens book</option>
            <option>Patterns</option>
            <option>Commissions</option>
          </select>
        </div>
        <div className="input-container p-2">
          <label className="p-2">Upload image</label>
          <input className="col-10 p-2" type="file" accept="image/" onInput={(e) => {setImageURLObject({...imageURLObject,
            image: e.target.files[0]
          });console.log(imageURLObject)}}></input>
        </div>
        {!hideURLOption && <div className="input-container p-2">
          <label className="p-2">Etsy shop link for image</label>
          <input className="col-10 p-2" onInput={(e) => {setImageURLObject({...imageURLObject,
            URL: e.target.value
          })}}></input>
        </div>}
        <div className="input-container p-2">
          <button className="p-2" onClick={() => {setHideURLOption(true); setShowAddPage(false); SendToServer()}}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Add;