import { BgLines } from "../svg";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useState } from "react";
// import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const code = {
    username: "kenanakperov@omnitech.com",
    password: "kenan2004",
  };
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const sendLogin = () => {
    if (
      code.username === loginData.username &&
      code.password === loginData.password
    ) {
      console.log("Salam");
      navigate("/home");
    } else {
      console.log("Sagooool");
      navigate("/");
    }
  };
  //   const sendLogin = () => {
  //   axios.post("url", loginData).then((res) => {
  //     console.log(res);
  //   });
  // };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setLoginData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  return (
    <div className="loginPage">
      <div className="bgImg"></div>
      <div className="loginForm">
        <div className="loginFormBG">
          <div className="bgLines">
            <BgLines />
          </div>
        </div>
        <div className="loginInputs">
          <h2>Tiket sistemə giriş</h2>
          <div className="w-full">
            <div className="mb-1">
              <Label>Email</Label>
            </div>
            <Input
              onChange={handleChange}
              name="username"
              type="email"
              placeholder="kenanakperov@omnitech.az"
            />
          </div>
          <div className="w-full mt-8 mb-4">
            <div className="mb-1">
              <Label>Şifrə</Label>
            </div>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="*********"
            />
          </div>
          <div className="loginBtn">
            <Button
              onClick={() => {
                sendLogin();
              }}
              variant="mybtn"
              width="400px"
            >
              <Label>Daxil ol</Label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
