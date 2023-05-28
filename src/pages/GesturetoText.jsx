import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import "../styles/GesturetoText.css";
import Dropdown from "react-bootstrap/Dropdown";

import { useSpeechSynthesis } from "react-speech-kit";

const GestureToText = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const [standards, setStandars] = useState("Sign Language Standars");

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const startRecording = () => {
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const handleDataAvailable = ({ data }) => {
    const videoSrc = URL.createObjectURL(data);
    setRecordedVideo(videoSrc);
  };

  const handleTurnOffCamera = () => {
    setIsCameraOn(false);
  };

  //text to speech
  const [resText, setResText] = useState("");
  const { speak } = useSpeechSynthesis();
  const textToSpeech = () => {
    speak({ text: resText });
  };

  useEffect(() => {
    return () => {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state === "recording"
      ) {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  return (
    <div className="container">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {standards}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={() => setStandars("ASL")}>
            ASL
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setStandars("BSL")}>
            BSL
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {isCameraOn && (
        <div className="cameraContainer">
          <Webcam
            className="webcam"
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "user",
            }}
          />
        </div>
      )}

      <div className="btnContainer p-1">
        <button
          type="button"
          className="btn btn-primary"
          onClick={captureImage}
        >
          Capture Image
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={isRecording ? stopRecording : startRecording}
        >
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
        {isCameraOn && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleTurnOffCamera}
          >
            Turn off Camera
          </button>
        )}
      </div>
      <div className="resultContainer">
        <form>
          <div className="form-group ">
            <label className="control-label " htmlFor="email">
              Result
            </label>
            <div className="input-group">
              <input
                className="form-control inputStyle"
                id="email"
                name="email"
                type="text"
                onChange={(e) => {
                  setResText(e.target.value);
                }}
              />
              <div className="input-group-addon" onClick={textToSpeech}>
                <i class="bi bi-volume-up micCustom"></i>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* <div className="recording-container">
        {capturedImage && (
          <img className="captured-image" src={capturedImage} alt="Captured" />
        )}
        {recordedVideo && (
          <video
            className="recorded-video"
            src={recordedVideo}
            controls
          ></video>
        )}
      </div> */}
    </div>
  );
};

export default GestureToText;
