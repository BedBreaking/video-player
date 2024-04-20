import React from "react";
const FolderCard = ({ name, id, selctedID, folderColorRgb, iconLink }) => {
  const cardStyle = {
    width: "160px",
    height: "40px",
    border: `1px solid ${folderColorRgb}`,
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    cursor: "pointer",
    margin: "5px",
    background: "#000",
    color: "#fff",
    gap: "8px",
  };
  return (
    <div style={cardStyle} id={id} data-id={id} onClick={() => selctedID(id)}>
      <img
        style={{ width: "20px", height: "20px" }}
        src={iconLink}
        alt="icon"
      />
      <p style={{ margin: 0 }}>{name}</p>
    </div>
  );
};
export default FolderCard;
