import React from "react";

const AuthFormView = props => {
    const { 
      fistName,
      lastName,
      // // picture,
      password,
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
      isLoggedIn,
      isSigned} = props;

    // display login form when user click on login bottom
    const displayLogin = (
      <div>
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
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    );

    // Display sign up form when user click on sign up bottom
    const displaySignUp = (
      <form onSubmit={handleSubmit} name={name}>
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
          {/* <div>
            <label htmlFor="height">
              <small>Height</small>
            </label>
            <input name="height" type="number" onChange={handleChange} />
          </div> */}
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
    );

    // if user is signed display login form, display sign up form otherwise
    if(false)
      return ( <>{displayLogin}</> );
    else
      return ( <>{displaySignUp}</>);
  };
  
  export default AuthFormView;