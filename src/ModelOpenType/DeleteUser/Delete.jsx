import React, { useEffect, useState } from "react";
// import "../UpdateUser/UpdateDetails.css";
import "./Delete.css";
import PrimaryBtn from "../../Common/Button/PrimaryBtn/Primary";
import { Icon } from "../../Utility/IconPath";
import axios from "axios";
import { KEY_ACCESS_TOKEN } from "../../Utility/constants";
import Cookies from "js-cookie";

const DeleteContact = ({ DataDelete, UserUpdate, onSave }) => {
  const [showModelDelete, setShowModelDelete] = useState(true); //Model Open and Close
  const [name, setName] = useState();
  const [userId, setUserId] = useState(null);
  const [profile, setProfile] = useState();

  const CloseModel = () => {
    setShowModelDelete(false);
  };
  const HandleSetData = () => {
    setName(DataDelete?.name);
    setProfile(DataDelete?.contact_profile);
  };
  useEffect(() => {
    if (userId) {
      CloseModel();
      HandleSetData();
    }
    setUserId(DataDelete?._id);
  }, [userId, onSave]);

  const HandleDeleteUser = async () => {
    try {
      const authorizationToken = Cookies.get(KEY_ACCESS_TOKEN);

      let DeleteUrl = await axios.delete(
        `http://localhost:5000/api/contacts/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="Delete_User_Container ">
      <div className="Delete_user_Main">
        <div className="Update_User_Input_Choose_User_Profile">
          <img
            src={profile}
            alt="addUser"
            //   onClick={handleButtonClick}
            className="Add_User_Icon"
          />
        </div>
        <div className="Delete_User_AgreeMent_And_Name">
          Are you sure you really want to permanently delete <span>{name}</span>{" "}
          in your contact list ? Note - Once delete it will not be recoverable.
        </div>
        <div className="Delete_Button">
          <PrimaryBtn
            LRBText={"Yes, Delete"}
            backgroundColor={"#FF4D4F"}
            onClick={HandleDeleteUser}
            // color={"#FF4D4F"}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;
