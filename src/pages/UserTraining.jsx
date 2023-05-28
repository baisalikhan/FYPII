import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/UserTraining.css";
import a from "../assets/images/gestures/a.PNG";
import b from "../assets/images/gestures/b.PNG";
import c from "../assets/images/gestures/c.PNG";
import d from "../assets/images/gestures/d.PNG";
import e from "../assets/images/gestures/e.PNG";
import f from "../assets/images/gestures/f.PNG";
import g from "../assets/images/gestures/g.PNG";
import h from "../assets/images/gestures/h.PNG";
import i from "../assets/images/gestures/i.PNG";

import Dropdown from "react-bootstrap/Dropdown";

function UserTraining() {
  const [staticChk, setStatiChk] = useState(true);
  const [categories, setCategories] = useState("Categories");
  // const [lst, setLst] = useState([]);
  const [gestures, setGestures] = useState([a, b, c, d, e, f, g, h, i]);

  const [lesson, setLesson] = useState("counting");
  const [status, setStatus] = useState("Static");
  const [standard, setStandard] = useState("ASL");

  // const images = [
  //   "https://picsum.photos/400/300",
  //   "https://picsum.photos/400/301",
  //   "https://picsum.photos/400/302",
  //   "https://picsum.photos/400/303",
  //   "https://picsum.photos/400/304",
  //   "https://picsum.photos/400/305",
  //   "https://picsum.photos/400/306",
  //   "https://picsum.photos/400/307",
  // ];
  const videos = [
    {
      id: 1,
      title: "Video 1",
      url: "https://www.youtube.com/embed/uKKvNqA9N20",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www.youtube.com/embed/3x9pPcMbDBY",
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://www.youtube.com/embed/rtHOAISER7I",
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://www.youtube.com/embed/cmyTxSt-pPI",
    },
    {
      id: 1,
      title: "Video 1",
      url: "https://www.youtube.com/embed/uKKvNqA9N20",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www.youtube.com/embed/3x9pPcMbDBY",
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://www.youtube.com/embed/rtHOAISER7I",
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://www.youtube.com/embed/cmyTxSt-pPI",
    },
  ];
  const stateChk = () => {
    // console.log(Gestures);
    if (staticChk) {
      setStatiChk(false);
      setStatus("Static");
      setStandard("ASL");
      setLesson("ANIMALS");
    } else {
      setStatiChk(true);
      setStatus("Dynamic");
      setStandard("BSL");
      setLesson("ALPHABETS");
    }
  };

  //from haider
  // let l;
  // const getlessons = async () => {
  //   let formm = new FormData();
  //   formm.append("lesson", "alphabets");
  //   formm.append("stand", "asl");
  //   formm.append("state", "static");
  //   let response = await fetch("http://192.168.100.218:3000/getLesson", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: formm,
  //   });
  //   let json = await response.json();
  //   setLst(json);
  //   l = json;
  //   //console.log(lst)
  //   setLst(l);
  //   console.log(lst);
  // };

  // useEffect(
  //   React.useCallback(() => {
  //     getlessons();
  //   }, [])
  // );

  const [data, setData] = useState(null);
  const [label, setLabel] = useState("A");
  const [standar, setStandar] = useState("ASL");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchDataFromAPI = async () => {
    // let formm = new FormData();
    // formm.append("lesson", lesson);
    // formm.append("status", status);
    // formm.append("standard", standard);
    // try {
    //   const response = await fetch("http://192.168.161.224:5000/GetAllData", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "multipart/form-data",
    //       mode: "no-cors",
    //     },
    //     // body: JSON.stringify({ lesson, status, standard }),
    //     body: formm,
    //   });
    //   const jsonData = await response.json();
    //   setData(jsonData);
    //   console.log("API calles successfully", data);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
    const url = `http://192.168.161.224:5000/gesture?label=${label}&standard=${standar}`;

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

  // const url =
  //   "http://192.168.161.224:5000/GetTrainingData?lesson=ANIMALS&status=static&standard=ASL";

  // function getFlaskData(url) {
  //   // Make a request to the Flask API.
  //   const response = fetch(url);

  //   // Check if the request was successful.
  //   if (response.status === 200) {
  //     // Get the response body as JSON.
  //     const data = response.json();

  //     // Return the data.
  //     return data;
  //   } else {
  //     // Throw an error if the request was not successful.
  //     throw new Error(`Request failed with status code ${response.status}`);
  //   }
  // }

  useEffect(() => {
    fetchDataFromAPI();
    // const users = getFlaskData("/users");
    // console.log(users);
  }, []);

  return (
    <Container>
      <div className="btnContainer">
        <button className="btn btn-success w-25" onClick={stateChk}>
          Static
        </button>
        <button className="btn btn-info w-25" onClick={stateChk}>
          Dynamic
        </button>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {categories}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="#/action-1"
            onClick={() => setCategories("Colors")}
          >
            Colors
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            onClick={() => setCategories("Digits")}
          >
            Counting
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            onClick={() => setCategories("Alphabets")}
          >
            Alphabets
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {staticChk && (
        <Row className="justify-content-center">
          {gestures.map((image, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index}>
              <div className="gallery-image">
                <img src={image} alt={`Gallery ${index}`} />
              </div>
            </Col>
          ))}
        </Row>
      )}
      {!staticChk && (
        <Row className="justify-content-center">
          {videos.map((video) => (
            <Col xs={6} sm={6} md={4} lg={3} key={video.id}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title={video.title}
                  className="embed-responsive-item videoCustom"
                  src={video.url}
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default UserTraining;
