import React from "react";
import SingIn from "./components/signin";
import Request from "./api/request";

const App = () => {
    // const [loginInfo, setLoginInfo] = useState(
    //     new Request(document.querySelector('#floatingInput').value, document.querySelector('#floatingPassword').value).Login());

    return (
        <>
            <SingIn />
        </>
    )
}

export default App;