import { useState } from "react";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios"

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        firstname,
        lastname,
        username,
        password,
      });
      console.log(response);
      localStorage.setItem("token",response.data.token)
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center overscroll-y-none ">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 mt-5 mb-5 overscroll-none">
        <div></div><Heading label={"Sign Up"}/>
        <SubHeading label={"Enter your information to create an account"} />
        <form className="mt-6">
          <InputBox
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="jondow@gmail.com"
            label={"Email"}
            type="email"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
            label={"Password"}
            type="password"
          />
          <Button onPress={handleSubmit}label={"Sign Up"}/>
          <BottomWarning label={"Already have an Account?"} buttonText={"Sign in"} to={"/signin"}/>
         
        </form>
      </div>
    </div>
  );
}
