import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./Authcontext";
import signup from "./authimages/signup.jpg";
import "./authCss/signup.css";
function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("password does not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("failed to create an Account");
    }
    setLoading(false);
  }
  return (
    <main className="main-sign">
      <section className="signup-grid">
        <main>
          <h3 style={{ marginLeft: "30px" }}> Sign up</h3>
          {/* {error && <Alert severity="error"> {error} </Alert>} */}
          <h5
            style={{
              fontSize: "10px",
              marginLeft: "30px",
              color: "#7C7C7C",
              lineHeight: "15px",
              letterSpacing: "0.7px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Enter your credentials to continue
          </h5>
          <div style={{ marginLeft: "30px" }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="e-mail">
                <Form.Control
                  style={{
                    width: "300px",
                    padding: "12px",
                    marginRight: "30px",
                    marginLeft: "0px",
                  }}
                  type="e-mail"
                  ref={emailRef}
                  required
                  placeholder="E-mail"
                />
              </Form.Group>
              <Form.Group id="Password">
                <Form.Control
                  style={{
                    width: "300px",
                    marginTop: "30px",
                    padding: "12px",
                    marginLeft: "0px",
                  }}
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="password"
                />
              </Form.Group>

              <Form.Group id="Password-confirmed">
                <Form.Control
                  style={{
                    width: "300px",
                    marginTop: "30px",
                    padding: "12px",
                    marginLeft: "0px",
                  }}
                  type="password"
                  ref={passwordConfirmationRef}
                  required
                  placeholder="confirm password"
                />
              </Form.Group>

              <div>
                <div
                  style={{
                    fontSize: "0.5rem",
                    width: "100%",
                    marginRight: "30px",
                    marginTop: "10px",
                  }}
                >
                  By continuing you agree to our{" "}
                  <span
                    style={{
                      color: "green",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
                  >
                    Terms of Service{" "}
                  </span>
                  and{" "}
                  <span
                    style={{
                      color: "green",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
                  >
                    Privacy Privacy
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <button
                  disabled={loading}
                  style={{
                    background: "#53B175",
                    border: "none",
                    padding: "15px",
                    width: "250px",
                    marginRight: "30px",
                    borderRadius: "15px",
                    marginTop: "20px",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Sign up
                </button>
              </div>
            </Form>
          </div>

          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <strong> Already Have an account?</strong>
            <Link to="/login">Log in</Link>
          </div>
        </main>
        <div className="signup-img">
          <img width="100%" src={signup}></img>
        </div>
      </section>
    </main>
  );
}

export default Signup;
