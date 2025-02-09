
import loginImage from "./assets/login-light.png"
import BlueButton from "./components/Buttons/BlueButton"
function App() {


  return (
    <div className="flex flex-col items-center justify-center">
      <img src={loginImage} alt="" className="mt-32"/>
     <h1 className="mt-10 font-mulish text-2xl font-bold max-w-64 text-center text-active">Connect easily with your family and friends over countries</h1>
      <p className="mt-32 font-mulish font-semibold text-sm">Terms & Privacy Policy</p>
    <BlueButton text="Start Messaging" className="mt-4"/>
    </div>

  )
}

export default App
