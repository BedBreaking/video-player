import React from "react";
import FileCard from "../common/FileCard";
const AllVideosById = ({ videoFile }) => {
  return (
    <>
      {videoFile?.map((item, key) => {
        return <FileCard id={item?.id} metaData={item?.videoMediaMetadata} />;
      })}
    </>
  );
};

export default AllVideosById;
