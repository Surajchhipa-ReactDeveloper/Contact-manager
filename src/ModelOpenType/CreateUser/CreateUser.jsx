import React, { useEffect, useRef, useState } from "react";
import "./CreateUser.css";
import InputTag from "../../Common/InputTAg/InputTag";
import { Icon } from "../../Utility/IconPath";
import PrimaryBtn from "../../Common/Button/PrimaryBtn/Primary";

import axios from "axios";
import { KEY_ACCESS_TOKEN } from "../../Utility/constants";
import Cookies from "js-cookie";
import { header } from "../../Redux/header";

const CreateUser = ({ onSave, DataUpdate, UserUpdate }) => {
  const [showModel, setShowModel] = useState(false); //Model Open and Close
  const [selectedFileName, setSelectedFileName] = useState(); // File Upload
  const [selectedImage, setSelectedImage] = useState(null);
  // Input State All
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [userId, setUserId] = useState(null);
  const inputRef = useRef(null);

  // File Upload Start
  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    // debugger;
    const ImgFile = event.target.files[0];
    setSelectedFileName(ImgFile);
    const imageUrl = URL.createObjectURL(ImgFile);
    setSelectedImage(imageUrl);
  };

  const HandleSetData = () => {
    setName(DataUpdate?.name);
    setEmail(DataUpdate?.email);
    setPhone(DataUpdate?.phone);
    setSelectedImage(DataUpdate?.contact_profile);
  };

  // Check For Fill Input Properties Start
  const onClickCreateUser = async () => {
    const ApiUrl = userId
      ? `http://localhost:5000/api/contacts/${userId}` // Update existing user
      : `http://localhost:5000/api/contacts`; // Create new user
    try {
      let HasError = false;
      let EmailFormat = /\S+@\S+\.\S+/;
      if (name === "") {
        setFullNameError("Please enter a full name");
        HasError = true;
      } else {
        setFullNameError("");
      }
      if (email === "") {
        setEmailError("Please enter an email address");
        HasError = true;
      } else if (!EmailFormat.test(email)) {
        setEmailError("Please enter a valid email address");
        HasError = true;
      } else {
        setEmailError("");
      }

      if (phone === "") {
        setPhoneError("Please enter a phone number");
        HasError = true;
      } else {
        setPhoneError("");
      }
      if (HasError) {
        return;
      }
      const Data = new FormData();
      const updatedData = new FormData();
      const authorizationToken = Cookies.get(KEY_ACCESS_TOKEN);
      if (ApiUrl) {
        Data.append("name", name);
        Data.append("email", email);
        Data.append("phone", phone);
        Data.append("contact_profile", selectedFileName);
      }
      if (ApiUrl.userId) {
        updatedData.append("name", name);
        updatedData.append("email", email);
        updatedData.append("phone", phone);
        updatedData.append("contact_profile", selectedFileName);
      }

      const Header = {
        Authorization: `Bearer ${authorizationToken}`,
        "Content-Type": "multipart/form-data",
      };

      const response = userId
        ? await axios.put(ApiUrl, updatedData, {
            headers: Header,
          })
        : await axios.post(ApiUrl, Data, {
            headers: Header,
          });

      window.location.reload();
      // UserUpdate;
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const onClickEnter = (e) => {
      if (e.key === "Enter") {
        onClickCreateUser();
      }
    };
    document.addEventListener("keydown", onClickEnter);
  }, [onClickCreateUser]);

  useEffect(() => {
    if (userId) {
      HandleSetData();
    }
    setUserId(DataUpdate?._id);
  }, [userId, onSave]);

  return (
    <div className="Create_User_Container">
      <div className="Create_User_Main ">
        <div className="Create_User_Input_Choose_User_Profile">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="SelectedUserImage"
              className="Add_User_Icon"
            />
          ) : (
            <img
              src={Icon.Add_User_Blank}
              alt="addUser"
              onClick={handleButtonClick}
              className="Add_User_Icon"
            />
          )}

          <input
            style={{ display: "none" }}
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <div className="Create_User_Input_Data">
          <div className="Input_Box_Create_User">
            <InputTag
              marginTop={false}
              error={fullNameError}
              LabelText={"Full Name"}
              Type={"text"}
              Name={"Name"}
              placeholderText={"John Smith"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              endIcon={fullNameError !== "" ? Icon.ErrorInput_Logo : ""}
            />
          </div>
          <div className="Input_Box_Create_User">
            <InputTag
              marginTop={false}
              error={emailError}
              LabelText={"Email"}
              Type={"email"}
              Name={"Email"}
              placeholderText={"Example@email.com"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              endIcon={emailError !== "" ? Icon.ErrorInput_Logo : ""}
            />
          </div>

          <div className="Input_Box_Create_User">
            <InputTag
              marginTop={false}
              error={phoneError}
              LabelText={"Phone Number"}
              Type={"number"}
              Name={"Phone"}
              placeholderText={"00000-00000"}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              endIcon={phoneError !== "" ? Icon.ErrorInput_Logo : ""}
            />
          </div>
          <div className="Input_Box_Create_User createContact">
            <PrimaryBtn
              LRBText={userId ? "UPDATE CONTACT" : "CREATE CONTACT"}
              onClick={() => {
                onClickCreateUser();
                HandleSetData();
              }}
            />
          </div>
        </div>
      </div>
    </div>
    // </Model>
  );
};

export default CreateUser;
