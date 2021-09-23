import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show && "This is new!"}</p>;
};

//memo is basically telling react to look for props and see if props contains different values from previous props
//and only re-evaluate if current props is different

//Why don't we use memo if it is so good in terms of performance?
//Because it tells react to do 2 things now. Save the props state and compare with current props.
//We are trading the performance of re rendering the component with the performance of comparing props

//It can be worth it with a component that contains childrens.
//https://overreacted.io/before-you-memo/
export default React.memo(DemoOutput);
