import logo from './logo.svg';
import './App.css';
import PinInput from './Components/PinInput';

function App() {
  return (
    <div className="bg-gray-300 h-screen flex flex-col items-center py-10 text-center">
      <h1 className="text-3xl font-bold">Enter OTP</h1>
      <PinInput length={5} maxChar={1}/>
    </div>
  );
}

export default App;
