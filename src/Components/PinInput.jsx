import React, { useRef, useState } from "react";
let green=false;
const PinInput = ({ length, maxChar }) => {
  const [inputLength] = useState(new Array(length).fill(""));

  const inputRef = useRef([]);

  const [otp,setOtp]=useState([]);

  const focusHandler = (e,index) => {
    
    inputLength[index]=e.target.value;

    if(e.target.value.length>0 && index<length-1){
      inputRef.current[index+1].focus();
    }
    if(index===length-1){
      green=true
    }
    setOtp(inputLength.join(""))
  };
  const backSpaceHnadler = (e,index) => {
    inputLength[index]=e.target.value;

    if(index>0){
      inputRef.current[index-1].focus();
    }
    if(index<length){
      green=false
    }
    setOtp(inputLength.join(""))
  }
  const keysHnadler=(e ,index)=>{
    if(e.keyCode ===8){
      backSpaceHnadler(e,index)
    }else{
      focusHandler(e,index)
    }
  }

  const PesteHandler=(e)=>{
    let data=e.clipboardData.getData("Text").split("").filter((el,index)=>(el!==" " && index<length))
    // console.log(data)
    data.forEach((el,index)=>{
      console.log(el.length>0)
      inputLength[index]=el;
        inputRef.current[index].value=el;
      if(index<length-1){
        inputRef.current[index+1].focus();
      }

    })
  }
  return (
    <div >
      <div className="bg-slate-700 px-10 rounded-3xl">
      {inputLength.map((el ,index) => {
        return (
          <input className={`border-4 h-24 w-24 mr-4  outline-none shadow-2xl focus:scale-110 rounded-3xl  focus:shadow-cyan-400  text-center text-2xl font-bold my-10 ${ green ? "text-green-500 border-green-500 bg-slate-100" :"text-gray-800" }  `}
          key={index}
            ref={(e)=>{inputRef.current[index]=e}}
            type="text"
            maxLength={maxChar}
            onKeyUp={(e)=>{keysHnadler(e ,index)}}
            onPaste={PesteHandler}
            disabled={green}
          />
        );
      })}
      </div>
      <h2 className="text-3xl font-bold">OTP:{otp}</h2>
    </div>
  );
};

export default PinInput;
