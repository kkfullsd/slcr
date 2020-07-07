import React, { useState } from 'react'

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <h1>SLCR</h1>
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <span className="card-title">Авторизация</span>

              <div className="input-field">
                <input
                  placeholder="Enter email"
                  id="email"
                  type="text"
                  className="yellow-input"
                  name='email'
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Enter password"
                  id="password"
                  type="password"
                  className="yellow-input"
                  name='password'
                  onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>


            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4"
                style={{ marginRight: "10px" }}
              >
                Sign in
              </button>
              <button className="btn grey lighten-1">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
}