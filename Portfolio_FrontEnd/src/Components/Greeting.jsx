import React from 'react';

function Greeting () {
    const hour = new Date().getHours();
    let Message = "";

if (hour >= 6 && hour < 12) {
  Message = "Good Morning";
} else if (hour >= 12 && hour < 16) {
  Message = "Good Afternoon";
} else if (hour >= 16 && hour < 20) {
  Message = "Good Evening";
} else {
  Message;
}

    return (
        <>
         <div className = 'flex items-center justify-center text-4xl pt-3 '>
            <h1 className = "font-medium text-white">{Message}</h1>
         </div>
        </>
    )
}
export default Greeting;