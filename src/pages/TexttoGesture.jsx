import React, { useState, useEffect } from "react";
import hello from "../assets/images/hello.jpeg";
import { event } from "jquery";
// import "../styles/TexttoGesture.css";

const TexttoGesture = () => {
  const [imageChk, setImageChk] = useState(false);
  const [imageFromApi, setImageFromApi] = useState();

  const [mic, setMic] = useState(true);

  const TextTranslate = () => {};
  const speechToText = () => {
    if (mic) {
      setMic(false);
    } else {
      setMic(true);
    }
  };

  const [data, setData] = useState(null);
  const [gestlabel, setGestlabel] = useState();
  const [label, setLabel] = useState("Sunday");
  const [standar, setStandar] = useState("ASL");

  const fetchDataFromAPI = async () => {
    const url = `http://192.168.161.224:5000/gesture?label=${gestlabel}&standard=${standar}`;
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        // "Content-Type": "multipart/form-data",
        // "Content-Type": "application/json",
        mode: "no-cors",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        setData(data);
        console.log("API called");
        console.log(data);
      })
      .catch((error) => {
        console.log("API not called");
        console.error(error);
      });
  };

  const translatefunc = () => {
    fetchDataFromAPI();
    setImageChk(true);
  };

  // useEffect(() => {
  //   fetchDataFromAPI();
  //   // const users = getFlaskData("/users");
  //   // console.log(users);
  // }, [label, standar]);

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="container">
      <div className="resultContainer">
        <form>
          <div className="form-group ">
            <label className="control-label " htmlFor="email">
              Text
            </label>
            <div className="input-group">
              <input
                className="form-control inputStyle"
                id="gestlabel"
                name="gestlabel"
                type="text"
                value={gestlabel}
                onChange={(event) => setGestlabel(event.target.value)}
              />
              <div className="input-group-addon" onClick={speechToText}>
                {mic ? (
                  <i className="bi bi-mic micCustom"></i>
                ) : (
                  <i class="bi bi-mic-mute micCustom"></i>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="btnContainer p-1">
        <button
          type="button"
          className="btn btn-primary"
          onClick={translatefunc}
        >
          Translate
        </button>
      </div>
      <div className="d-flex flex-row justify-content-center p-2 impImageContainer">
        {imageChk && (
          <img
            className="importedImage"
            style={{
              resizeMode: "contain",
              height: 300,
              width: 300,
            }}
            src={data}
            alt="ImageFromDatabase"
          />
        )}
        {/* <div className="container">
          <div className="row">
            <div className="col-md-6">
              <video className="w-100" autoPlay loop muted>
                <source src={data} type="video/mp4" allowFullScreen />
              </video>
            </div>
          </div>
        </div> */}
        {/* <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button> */}
      </div>
    </div>
  );
};

export default TexttoGesture;
