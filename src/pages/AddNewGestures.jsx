import React, { useState, useEffect } from "react";
import "../styles/AddNewGestures.css";

const AddNewGestures = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can do something with the selected files here
    console.log(selectedFiles);
  };

  const [data, setData] = useState();

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch("http://192.168.161.224:5000/GetAllData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          mode: "no-cors",
        },
        // body: JSON.stringify({ lesson, status, standard }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
      console.log("API called successfully");
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <div className="container">
      <div className=" d-flex flex-row justify-content-center">
        <form className="formCustomization">
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="imageInput">Select Ten images:</label>
              <input
                id="imageInput"
                type="file"
                className="form-control-file m-3"
                multiple
                onChange={handleFileInputChange}
              />
            </div>
            <label htmlFor="exampleInputEmail1" className="labels">
              Gesture Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Gesture Name "
            />
            {/* <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="labels">
              Standard
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Standard"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label w-25" htmlFor="exampleCheck1">
              Static
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck2"
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck2"
            />
            <label className="form-check-label w-25" htmlFor="exampleCheck1">
              Dynamic
            </label>
          </div>

          <button type="submit" className="btn btn-primary labels">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewGestures;
