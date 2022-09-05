import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import "../components/styles/login.css";
import Auth from "../utils/auth";
import "../assets/blueLearn.jpg"

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  const labels = document.querySelectorAll(".form-control label");

  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
      )
      .join("");
  });

  return (
    <main className="flex-row justify-center  logBack">
      <div class="logE containerr card-text">
        <div className="logC logE logP">
          <h4 className="">Login</h4>
          <div className="formBG aone ">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-control form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={formState.email}
                />
                
                  <input
                    className="form-control form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={formState.password}
                  />
                
               
                  <button
                    className="btn logBt"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Submit
                  </button>
                
                <h4 className="noAc">
                  Don't have an account? <a className="upSign" href="signup">Sign Up</a>
                </h4>
              </form>
            )}
          </div>
        </div>
      </div>
      {/* <div className='col-12 col-lg-10'>
        <div className='card logC'>
          <h4 className='card-header bg-dark text-light p-2'>Login</h4>
          <div className='card-body'>
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to='/'>back to the homepage.</Link>
              </p>
            ) : (
            <form>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
              />
              <button
                className='btn btn-block btn-primary'
                style={{ cursor: "pointer" }}
                type='submit'
              >
                Submit
              </button>
            </form>
            )}
          </div>
        </div>

      </div> */}

      {/* <div class="containerr">
        <h1>Please Login</h1>
        <form>
        <div class="form-control">
        <input type="text" required/>
        <label>E-mail</label>
        
        </div>
        
        <div class="form-control">
        <input type="password" required/>
        <label>Password</label>
        </div>
        <button class="btn">Login</button>
        
        <p class="text">Don't have an account? <a href="#">Register</a></p>
        </form>
      </div> */}
    </main>
  );
};

export default Login;
