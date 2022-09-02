import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import "../components/styles/login.css";
import Auth from "../utils/auth";

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
    <main className="flex-row justify-center mb-4">
      <div class="card-text d-flex justify-content-center">
        <div className="logC containerr">
          <h4 className="">Login</h4>
          <div className="formBG">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form>
                <input
                  className="form-control form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                />
                <div className="">
                  <input
                    className="form-control form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn logBt"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <p class="text">
                  Don't have an account? <a href="signup">Sign Up</a>
                </p>
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
