import React from "react";
import SingIn from "./components/signin";
import {Routes, Route} from 'react-router-dom'
import UserInfo from "./components/userInfo";

const App = () => {
    // const [loginInfo, setLoginInfo] = useState(
    //     new Request(document.querySelector('#floatingInput').value, document.querySelector('#floatingPassword').value).Login());

    return (
        <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/userinfo" element={<UserInfo />} />
        </Routes>
    )
}

export default App;