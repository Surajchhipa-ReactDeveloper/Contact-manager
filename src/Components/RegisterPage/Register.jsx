import React, { useState } from "react";
import "./Register.css";
import InputTag from "../../Common/InputTAg/InputTag";
import { Icon } from "../../Utility/IconPath";
import PrimaryBtn from "../../Common/Button/PrimaryBtn/Primary";
import BackImg from "../../Common/HomeImg/BackImg";
import { useRegisterMutation } from "../../Redux/api/Register/Register.api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const registerNavigation = useNavigate();
  const [nameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);

  const [registerMutation, { data: registerMutationRes, isLoading }] =
    useRegisterMutation();

  const endOnClick = () => {
    setHide(!hide);
  };
  const onClickRegister = async () => {
    try {
      let hasError = false;
      let EmailFormat = /\S+@\S+\.\S+/;

      setUsernameError("");
      setEmailError("");
      setPasswordError("");

      if (username === "") {
        setUsernameError("Please enter your Username");
        hasError = true;
      }
      if (email === "") {
        setEmailError("Please enter your email");
        hasError = true;
      } else if (!EmailFormat.test(email)) {
        setEmailError("Please enter Valid Email");
        hasError = true;
      }
      if (password === "") {
        setPasswordError("Please enter your password");
        hasError = true;
      }
      if (hasError) {
        return;
      }
      // alert("sucessfully");

      const payload = {
        username: username,
        email: email,
        password: password,
      };
      const registerMutationRes = await registerMutation(payload);
      if (registerMutationRes.data) {
        registerNavigation("/");
      } else if (registerMutationRes.error) {
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div className="Register_Page_container Login_And_Register_Page_container">
        <div className="Home_Page_Left_Container">
          <BackImg />
        </div>
        <div className="Register_Page_Right_container Login_And_Register_Page_Right_container">
          <div className="Register_Page_Main_container Login_And_Register_Page_Main_container">
            <div className="Login_Page_Top_container Login_Register_Top_container_Heading_Title">
              <div className="Register_Main_Heading Common_Login_Register_Heading">
                Welcome
              </div>
              <div className="Register_Main_Text Common_Login_Register_Text">
                Simplify Your Contacts, Amplify Your Network – Join our
                Registration and Experience Seamless Organization.
              </div>
            </div>
            <div className="Input_Register_Data Input_Login_Register_Data">
              <div className="Input_Div">
                <InputTag
                  marginTop={false}
                  error={nameError}
                  LabelText={"Full Name"}
                  Type={"text"}
                  Name={"Name"}
                  placeholderText={"Enter your username"}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  startIcon={Icon.Name_Logo}
                  endIcon={nameError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Input_Div">
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
                  startIcon={Icon.Password_Logo}
                  endIcon={emailError !== "" ? Icon.ErrorInput_Logo : ""}
                />
              </div>
              <div className="Input_Div">
                <InputTag
                  marginTop={false}
                  error={passwordError}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  LabelText={"Password"}
                  Type={hide ? "password" : "text"}
                  Name={"Password"}
                  placeholderText={"Enter your password"}
                  startIcon={Icon.Password_Logo}
                  endIcon={
                    passwordError == ""
                      ? hide
                        ? Icon.Hide_Logo
                        : Icon.UnPassword_Logo
                      : Icon.ErrorInput_Logo
                  }
                  endOnClick={endOnClick}
                  ErrorMassage={"Please enter your Password"}
                />
              </div>
              <div className="Input_Div">
                <PrimaryBtn
                  LRBText={"Register"}
                  LRText={"You have a account"}
                  LRTextType={"Login"}
                  NavTarget={"/login"}
                  // NavBtnSend={"/login"}
                  onClick={onClickRegister}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
