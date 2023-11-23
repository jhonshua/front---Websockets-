import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = 'https://apiwebsockets-dev-ccgr.3.us-1.fl0.io/';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
