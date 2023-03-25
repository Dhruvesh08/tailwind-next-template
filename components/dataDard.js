import React from "react";

const DataCard = (props) => {
  console.log(props);
  return (
    <div className="w-96 h-40 shadow-md rounded-lg m-5 p-2">
      <h4 className="text-lg">{props.index}</h4>
      <p className="text-lg font-serif ">{props.title}</p>
      <p className="text-ellipsis overflow-hidden h-1/2 font-thin">
        {props.body}
      </p>
    </div>
  );
};

export default DataCard;
