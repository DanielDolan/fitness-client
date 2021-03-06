import React from "react";
import "../views/styles/AuthFormView.css"

const AuthFormView = props => {
  const {
    // firstName,
    // lastName,
    // picture,
    // password,
    // height,
    // weight,
    // weightGoal,
    // age,
    // birthday,
    name,
    displayName,
    userEmail,
    handleSubmit,
    error,
    handleChange,
    isLoggedIn } = props;

  // display login form when user click on login bottom
  const displayLogin = (
    <div className="auth-form-view">
      {isLoggedIn ? `The current logged in user is: ${userEmail}` : ""}
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <br></br>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );

  // Display sign up form when user click on sign up bottom
  const displaySignUp = (
    <div className="auth-form-view">
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" onChange={handleChange} />
        </div>
        {/* <div>
            <label htmlFor="picture">
              <small>Picture</small>
            </label>
            <input name="picture" type="image" onChange={handleChange} />
          </div> */}
        <div>
          <label htmlFor="weight">
            <small>Weight</small>
          </label>
          <input name="weight" type="number" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="weightGoal">
            <small>Weight Goal</small>
          </label>
          <input name="weightGoal" type="number" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">
            <small>Age</small>
          </label>
          <input name="age" type="number" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="birthday">
            <small>Birthday</small>
          </label>
          <input name="birthday" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="height">
            <small>Height</small>
          </label>
          <input name="height" type="number" onChange={handleChange} />
        </div>
        <br></br>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );

  const displayLogout = (
    <div>
      <h2>Do you want to log out ?</h2>
      <button type="submit" onClick={handleSubmit} name={name}>{displayName}</button>
    </div>
  )
  //console.log("error in view page ", error && error.response && error.response.data)
  // if user is signed display login form, display sign up form otherwise
  if (name === "login")
    return (<>{displayLogin}</>);
  else if (name === "signup")
    return (<>{displaySignUp}</>);
  else
    return (<>{displayLogout}</>)
};

export default AuthFormView;