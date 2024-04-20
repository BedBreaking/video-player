import React from "react";
import MegaData from "../MegaDrive.json";
const MegaDrive = () => {
  console.log(MegaData, "MegaData");
  return (
    <div
      style={{
        color: "#000",
        display: "flex",
        flexWrap: "wrap",
        gap: "3px",
        padding: "0px 3px",
        justifyContent: "center",
      }}
    >
      {MegaData.map((item, key) => {
        return (
          <>
            <div
              style={{
                padding: "20px 10px",
                background: "Black",
                color: "#fff",
                borderRadius: "8px",
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
              }}
            >
              <iframe
                title="Show Video"
                width="460"
                height="240"
                frameborder="0"
                src={`https://mega.nz/embed/${item?.id}`}
                allowfullscreen="true"
              ></iframe>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "15px",
                }}
              >
                <div>Name: Video {key + 1}</div>
                <div>Actress: {item?.Actress}</div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MegaDrive;
