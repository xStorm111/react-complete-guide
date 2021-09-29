import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  //** Ref vs State **/
  //----------------//
  //** When to use:**/

  //*Refs:
  // If we only need to access the value once we should use *ref*, otherwise it would be overkill to check state in every key stroke (ofc we could implement debounce)

  //*State:
  // If we need to validate the user input with instant validation
  // Another reason to use state is if we want to reset the value

  //Why we don't use ref to reset values?
  //!Because it's NOT IDEAL to manipulate the DOM,
  //if we are using react which contains a virtual DOM to do the heavy lifting for us, we should avoid to interfer on React's job

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangedHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangedHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = enteredNameIsValid && enteredEmailIsValid; //true means multiple validations if we have them
  // if (enteredNameIsValid) formIsValid = true;

  const formSubmissionHandler = (event) => {
    //browser by default reload the page
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          // ref={nameInputRef}
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={formSubmissionHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
