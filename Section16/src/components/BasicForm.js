import useAdvancedInput from "../hooks/use-advanced-input";

const BasicForm = (props) => {
  const [
    firstNameValue,
    firstNameValidValue,
    firstNameInputInvalid,
    firstNameErrorMessage,
    firstNameHandleValueChange,
    firstNameHandleInputBlur,
    firstNameReset
  ] = useAdvancedInput([
    {
      fn: (val) => val !== "",
      message: "Please enter a first name."
    }
  ]);

  const [
    lastNameValue,
    lastNameValidValue,
    lastNameInputInvalid,
    lastNameErrorMessage,
    lastNameHandleValueChange,
    lastNameHandleInputBlur,
    lastNameReset
  ] = useAdvancedInput([
    {
      fn: (val) => val !== "",
      message: "Please enter a last name."
    }
  ]);

  const [
    emailValue,
    emailValidValue,
    emailInputInvalid,
    emailErrorMessage,
    emailHandleValueChange,
    emailHandleInputBlur,
    emailReset
  ] = useAdvancedInput([
    {
      fn: (val) => val !== "",
      message: "Please enter an email address."
    },
    {
      fn: (val) => val.includes("@"),
      message: "Please enter a valid email address."
    }
  ]);

  const submitHandler = (e) => {
    e.preventDefault();

    firstNameHandleInputBlur();
    lastNameHandleInputBlur();
    emailHandleInputBlur();

    if (!firstNameValidValue || !lastNameValidValue || !emailValidValue)
      return false;

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const ErrorMessage = ({ message }) => {
    return <p style={{ color: "red" }}>{message}</p>;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="firstname">First Name</label>
          <input
            value={firstNameValue}
            onChange={firstNameHandleValueChange}
            onBlur={firstNameHandleInputBlur}
            type="text"
            id="firstname"
          />
          {firstNameInputInvalid && (
            <ErrorMessage message={firstNameErrorMessage} />
          )}
        </div>
        <div className="form-control">
          <label htmlFor="lastname">Last Name</label>
          <input
            value={lastNameValue}
            onChange={lastNameHandleValueChange}
            onBlur={lastNameHandleInputBlur}
            type="text"
            id="lastname"
          />
          {lastNameInputInvalid && (
            <ErrorMessage message={lastNameErrorMessage} />
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={emailValue}
          onChange={emailHandleValueChange}
          onBlur={emailHandleInputBlur}
          type="text"
          id="email"
        />
        {emailInputInvalid && <ErrorMessage message={emailErrorMessage} />}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
