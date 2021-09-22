import { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* {...props.input} ensures that all key values property are added to input tag */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
