import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {

  // add state
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("medium");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  

  // add submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/openai/generateimage", {
      prompt : prompt,
      size: size
    }).then((res) => {
      setLoading(true);
      setImage(res.data.data);
      console.log(res.data.data);
    });
    console.log("Submitted");
  };

  
  return (
    <div className="container">
      <div className="form">
      <form onSubmit = {handleSubmit}>
        <input
          type="text"
          placeholder="Your Imagination"
          name="input"
          className="input"
          onChange={(e) => setPrompt(e.target.value)}
        />
        {/* <div className="select-group">
          <label>Select Size:</label>
          <select name="sizes" id="sizes" className="select">
            <option value="small" id="small">Small</option>
            <option value="medium" id="medium">Medium</option>
            <option value="large" id="large">Large</option>
          </select>
        </div> */}
        {/* add submit button */}
        <input type="submit" value="Submit" className="button"/>
      </form>
      </div>
      {loading ? !image ?
      <div className="img">Loading...</div>
      : <div className="img">
        <img src={image} alt="img" />
      </div>
      :<></>}
    </div>
  );
}

export default App;
