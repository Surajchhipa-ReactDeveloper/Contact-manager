import React, { useEffect, useState } from "react";
import "./UserPage.css";
import { Icon } from "../../Utility/IconPath";
import Model from "../Model/Model";
import InputTag from "../../Common/InputTAg/InputTag";
import CreateUser from "../../ModelOpenType/CreateUser/CreateUser";
// import SecondaryInput from "../../Common/InputTAg/SecondOnlyInput/SecondaryInput";
import { KEY_ACCESS_TOKEN } from "../../Utility/constants";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import GetUserData from "../../Common/GetCreateUserData/GetUserData";

const SortData = [
  {
    id: 1,
    Type: "All",
  },
  {
    id: 2,
    Type: "Aseanding",
  },
  {
    id: 1,
    Type: "Desandings",
  },
];
const UserPage = () => {
  const UserNavigate = useNavigate();
  const [show, setShow] = useState(false); //For SortType Open & Closed
  const [showModel, setShowModel] = useState(false); //For Model Open & Closed
  const [isActive, setIsActive] = useState(0); //For SortType ACTIVE
  const [value, setValue] = useState("Sort");
  const [search, setSearch] = useState("");
  const ChangeOrderSort = (index, Type) => {
    setShow(false);
    setValue(Type);
    switch (Type) {
      case "All": {
        setIsActive(index);
        break;
      }
      case "Aseanding": {
        setIsActive(index);
        break;
      }
      case "Desandings": {
        setIsActive(index);
        break;
      }
      default:
        break;
    }
  };
  const showOption = () => {
    setShow(show ? false : true);
  };

  const closeCreateUserModal = () => {
    setShowModel(false);
  };
  const handleSaveUser = () => {
    setShowModel(true);
  };

  // useEffect(() => {
  //   const GetCookies = Cookies.get(KEY_ACCESS_TOKEN);
  //   if (!GetCookies) {
  //     UserNavigate("/");
  //   }
  // });

  // useEffect(() => {
  //   const HandleCloseModel = {

  //   document.addEventListener("click", HandleCloseModel);
  // }, [showOption]);

  return (
    <>
      <div className="User_Container" style={{ backgroundColor: "" }}>
        {/* {******************* 1 Top Row  With App LOgo And Icon Start *******************} */}

        <div className="Contact_Manager_First_Row">
          <div className="First_Row_Left">
            <div className="First_Row_Left_App_Logo">
              <img src={Icon.Main_LOgo} alt="App Icon" className="AppLogo" />
            </div>
            <div className="First_Row_Left_App_Name App_Name">
              Contact Manager
            </div>
          </div>
          <div className="First_Row_Right">
            <div className="First_Row_Right_Setting_Logo">
              <img
                src={Icon.Setting_Logo}
                alt="Setting...."
                className="SettingLogo"
              />
            </div>
            <div className="First_Row_Right_Line"></div>
            <div className="First_Row_Right_User_Logo">
              <img
                src={Icon.UserProfile_Logo}
                alt=""
                className="UserProfileLogo"
              />
            </div>
          </div>
        </div>
        {/* {******************* 1 Top Row  With App LOgo And Icon End *******************} */}
        {/* {******************* 2 Search Row  With Search bar And Filter And Open Model Start *******************} */}
        <div className="Contact_Manager_Second_Row">
          <div className="Second_Row_Search_Bar ">
            <div className="SearchUserInput">
              <InputTag
                marginTop={true}
                Type={"text"}
                Name={"Search"}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholderText="Search Contact"
                startIcon={Icon.Search_Logo}
                value={search}
              />
            </div>
          </div>
          <div className="Second_Row_Sorting_Container_And_OpenModel ">
            <div className="Second_Row_Sorting_Container ">
              <div className="Second_Row_Sorting ">
                {value}
                <p onClick={showOption} className="LogoUPDownContainer">
                  {show ? (
                    <img src={Icon.UPArrow_Logo} alt="" className="UPDown" />
                  ) : (
                    <img src={Icon.DownArrow_Logo} alt="" className="UPDown" />
                  )}
                </p>
              </div>
              <div className="Sorting_Option_Container ">
                {show &&
                  SortData.map((item, index) => (
                    <div className="SortTing_Main_Container" key={index}>
                      <div
                        key={item.id + index}
                        className={`Sort_Type  ${
                          isActive === index ? "activeSortBtn" : ""
                        }`}
                        onClick={() => ChangeOrderSort(index, item.Type)}
                      >
                        {item.Type}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="Second_Row_Open_Model">
              <img
                src={Icon.Add_Logo}
                alt=""
                className="AddUserLogo"
                onClick={() => {
                  setShowModel(true);
                }}
              />
            </div>
            <Model
              closeModel={closeCreateUserModal}
              // children={() => }
              visible={showModel}
              ModelType={"Create Contact"}
            >
              <CreateUser onSave={handleSaveUser} />
            </Model>
          </div>
        </div>

        {/* {******************* 2 Search Row  With Search bar And Filter And Open Model End *******************} */}
        {/* {******************* 3 Row Four Create Multi User Dynimic User Start *******************} */}

        <div className="Responsive_Data_Outer_Container">
          {/* <div className="GerUserData_Calling_Point"> */}
          <GetUserData />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default UserPage;
