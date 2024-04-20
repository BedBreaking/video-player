import React from "react";
const FileCard = ({ id, metaData }) => {
  const cardStyle = {
    borderRadius: "8px",
    padding: "0px",
    cursor: "pointer",
    margin: "5px",
    flexWrap: "wrap",
  };
  return (
    <div style={cardStyle}>
      <iframe
        title="Google Drive Video"
        style={{ borderRadius: "8px", border: "1px solid #fff" }}
        src={`https://drive.google.com/file/d/${id}/preview`}
        width="520"
        height="340"
        allow="autoplay"
        allowfullscreen="true"
        frameBorder={0}
      ></iframe>
    </div>
  );
};

export default FileCard;
