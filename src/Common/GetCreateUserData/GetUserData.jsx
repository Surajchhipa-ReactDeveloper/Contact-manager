import React, { useEffect, useState } from "react";
import "./GetUserData.css";
import PrimaryBtn from "../Button/PrimaryBtn/Primary";
import Model from "../../Components/Model/Model";
import DeleteContact from "../../ModelOpenType/DeleteUser/Delete";
import axios from "axios";
import Cookies from "js-cookie";
import { KEY_ACCESS_TOKEN } from "../../Utility/constants";
import CreateUser from "../../ModelOpenType/CreateUser/CreateUser";
const GetUserData = () => {
  const [showModelUpdate, setShowModelUpdate] = useState(false); //For Model Open & Closed
  const [showModelDelete, setShowModelDelete] = useState(false); //Model Open and Close
  const [userId, setUserId] = useState();
  const [data, setData] = useState([]);

  const closeCreateUserModal = () => {
    setShowModelUpdate(false);
  };
  const closeDeleteUserModal = () => {
    setShowModelDelete(false);
  };  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorizationToken = Cookies.get(KEY_ACCESS_TOKEN);

        const response = await axios.get("http://localhost:5000/api/contacts", {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const HandleDelete = (DeleteData) => {
    setUserId(DeleteData);
  };

  const HandleUpdate = (UpdateData) => {
    setUserId(UpdateData);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="Get_User_Data_Container" key={index + item._id}>
            <div className="User_Data_Information" key={item._id}>
              <div className="User_Profile_Common">
                <img
                  src={item.contact_profile}
                  alt=""
                  className="Static_User_Profile"
                />
              </div>
              <div className="User_Name_Common">{item.name}</div>
              <div className="User_Email_Common Label">{item.email}</div>
              <div className="User_Number_Common">{item.phone}</div>
            </div>
            <div className="Delete_And_Update_Button">
              <div className="Delete_Update_Button">
                <PrimaryBtn
                  LRBText={"DELETE CONTACT"}
                  backgroundColor={"#FFD3D3"}
                  color={"#FF4D4F"}
                  onClick={() => {
                    setShowModelDelete(true);
                    HandleDelete(item);
                  }}
                />
              </div>
              <div className="Delete_Update_Button">
                <PrimaryBtn
                  LRBText={"UPDATE CONTACT"}
                  onClick={() => {
                    setShowModelUpdate(true);
                    HandleUpdate(item);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
      <Model
        closeModel={closeDeleteUserModal}
        visible={showModelDelete}
        ModelType={"Delete Contact"}
      >
        <DeleteContact
          onSave={showModelDelete}
          UserUpdate={closeDeleteUserModal}
          DataDelete={userId}
        />
      </Model>
      <Model
        closeModel={closeCreateUserModal}
        visible={showModelUpdate}
        ModelType={"Update Contact"}
      >
        <CreateUser
          onSave={showModelUpdate}
          UserUpdate={closeCreateUserModal}
          DataUpdate={userId}
        />
      </Model>
    </>
  );
};

export default GetUserData;
