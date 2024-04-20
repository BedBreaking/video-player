import React from "react";
import FolderCard from "../common/FolderCard";
const AllCatogery = ({ driveFiles, selctedID }) => {
  return (
    <>
      {driveFiles.map((item, key) => {
        return (
          <FolderCard
            name={item?.name}
            id={item?.id}
            folderColorRgb={item?.folderColorRgb}
            iconLink={item?.iconLink}
            selctedID={selctedID}
          />
        );
      })}
    </>
  );
};

export default AllCatogery;
