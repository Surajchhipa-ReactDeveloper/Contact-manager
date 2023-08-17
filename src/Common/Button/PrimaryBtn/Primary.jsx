import React from "react";
import "./Primary.css";
import { NavLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
const PrimaryBtn = ({
  LRBText,
  LRText,
  LRTextType,
  NavTarget,
  NavBtnSend,
  onClick,
  backgroundColor,
  color,
  fetching,
  activityIndicatorColor,
  isSecondary,
}) => {
  return (
    <>
      <div className="Primary_Button_Container">
        <div className="Button_and_Text">
          <NavLink to={NavBtnSend}>
            <button
              className="LOgRegButton Label"
              style={{
                backgroundColor: isSecondary
                  ? backgroundColor || "transparent"
                  : backgroundColor || "#1492e6",
                color: isSecondary ? color || "#1492e6" : color || "#ffffff",
                // border: isSecondary ? "2px solid #1492e6" : "",
              }}
              onClick={onClick}
              disabled={fetching}
            >
              {fetching ? (
                <CircularProgress
                  size={`2.5rem`}
                  style={{ color: activityIndicatorColor || "#fff" }}
                />
              ) : (
                LRBText
              )}
            </button>
          </NavLink>
          {/* <p className="NeedAccount Label">
            {LRText}
            <NavLink to={NavTarget}>
              <span className="SpanPrimary">{LRTextType}</span>
            </NavLink>
          </p> */}
        </div>
      </div>
    </>
  );
};

export default PrimaryBtn;
