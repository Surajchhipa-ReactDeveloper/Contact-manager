import React, { useEffect } from "react";
import "./Model.css";
import { Icon } from "../../Utility/IconPath";
import { createPortal } from "react-dom";

const Model = ({ closeModel, children, ModelType, visible }) => {

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      closeModel();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, [closeModel]);

  useEffect(() => {
    if (visible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [visible]);

  if (!visible) return null;

  return createPortal(
    <div className="Model_Container_Main">
      <div onClick={closeModel} className="modalOuterDiv"></div>
      <div className="Model_Container ">
        <div className="Model_Top_Row">
          <div className="Model_type">{ModelType}</div>
          <div className="Model_Close_Icon">
            <img
              src={Icon.Close_Logo}
              alt=""
              className="ModelCloseIcon"
              onClick={closeModel}
            />
          </div>
        </div>
        {children}
        <div />
      </div>
    </div>,
    document.querySelector(".modal")
  );
};

export default Model;
