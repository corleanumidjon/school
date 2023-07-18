import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import Students from "./Pages/Students/Students";
import Teachers from "./Pages/Teachers/Teachers";
import Courses from "./Pages/Courses/Courses";
import Groups from "./Pages/Groups/Groups";
import Lids from "./Pages/Lids/Lids";
import Settings from "./Pages/Settings/Settings";
import "./App.scss";
import Sms from "./Pages/Settings/Sms";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/lids" element={<Lids />} />
        <Route path="/settings" element={<Settings />}>
          <Route path="settings" element={<Sms />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
