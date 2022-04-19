// eslint - disable;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: "", pw: "" });
  // const [userId, setUserId] = useState("");
  // const [userPw, setUserPw] = useState("");
  const [btnChange, setBtnChange] = useState(true);

  const goToMain = () => {
    navigate("/main-hayoung");
  };

  const isValidation = () => {
    const idValue = user.id.includes("@");
    const pwValue = user.pw.length >= 5;

    idValue && pwValue ? setBtnChange(false) : setBtnChange(true);
  };

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login">
      <h1 className="login_logo">Westagram</h1>
      <div className="login_input">
        <input
          type="text"
          className="inputId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="id"
          value={user.id}
          onChange={onChange}
          onKeyUp={isValidation}
        />
        <input
          type="password"
          className="inputPw"
          placeholder="비밀번호"
          name="pw"
          value={user.pw}
          onChange={onChange}
          onKeyUp={isValidation}
        />
        <button
          className={!btnChange ? "active" : "unactive"}
          onClick={goToMain}
          disabled={btnChange}
        >
          로그인
        </button>
      </div>
      <div className="forget_pw">
        <a className="forgetPwLink" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
