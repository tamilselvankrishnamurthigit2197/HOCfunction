import React from "react";
import Button from "./Button";
import withClickTracking from "./withClickTracking";


const App = () =>{
  const ButtonWithTracking = withClickTracking(Button)
  return(
    <div>
      <ButtonWithTracking
        label="pay now"
        trackingInfo={{amount:2000, user:"Ram"}}
      />
    </div>
  )
}

export default App