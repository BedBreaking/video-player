import React, { useEffect, useState } from "react";
import AllVideosById from "./AllVideosById";
import AllCatogery from "./AllCatogery";
import MegaDrive from "./MegaDrive";
const MainPage = () => {
  const [driveFiles, setDriveFiles] = useState([]);
  const [videoFile, setVideoFile] = useState([]);

  const getGoogleDriveFolder = async () => {
    const response = await fetch("http://localhost:8080/api/getGoogleDrive", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data, "data");
    setDriveFiles(data);
  };
  useEffect(() => {
    getGoogleDriveFolder();
  }, []);

  const selctedID = async (id) => {
    const response = await fetch("http://localhost:8080/api/getFolderByID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        folderId: id,
      }),
    });
    const data = await response.json();
    if (data?.code === 200) {
      console.log(data?.items, "data?.items");
      setVideoFile(data?.items);
    } else {
      getGoogleDriveFolder();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ color: "#fff", width: "15%" }}>
        <AllCatogery driveFiles={driveFiles} selctedID={selctedID} />
      </div>
      <div
        className="video-container"
        style={{
          color: "#fff",
          width: "85%",
          height: "89vh",
          overflowY: "scroll",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <AllVideosById videoFile={videoFile} />
      </div>
    </div>
  );
};

export default MainPage;
