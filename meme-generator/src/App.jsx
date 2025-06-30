import { useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import WindowTracker from "./components/WindowTrack";
// import Practice from "./components/Practice";

function App() {
  // const [show, setShow] = useState(true)
  // function handleShow() {
  //   setShow(show ? false : true)
  // }
  return (
    <>
      {/* <Practice/> */}
      {/* <button onClick={handleShow} className="bg-green-800 text-white px-6 py-4">Toggle Show</button>
      {show && <WindowTracker />} */}
      <Header />
      <MainSection />
    </>
  );
}

export default App;
