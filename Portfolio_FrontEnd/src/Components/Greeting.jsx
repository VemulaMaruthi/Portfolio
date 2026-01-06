import React from 'react';

function Greeting () {
    const hour = new Date().getHours();
    let Message ;

    if(hour >= 6 && hour <= 12 ){
        Message = "Good Morning"
    }else if (hour >= 13 && hour < 16 ){
        Message = "Good Afternoon";
    }
    else if ( hour > 16 && hour <= 20 ){
        Message = "Good Evening";
    }
    return (
        <>
         <div className = 'flex items-center justify-center text-4xl mt-3'>
            <h1 className = "font-medium">{Message}</h1>
         </div>
        </>
    )
}
export default Greeting;