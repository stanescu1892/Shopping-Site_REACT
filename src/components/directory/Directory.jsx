// import { useState } from "react";
import MenuItem from "../menu-item/MenuItem";
import { list } from "../../utils/uiConstants";
import "./Directory.scss";

const Directory = () => {
  return (
    <div className="directory-menu">
      {list.sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
