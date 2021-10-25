import React, { useRef, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./Authcontext";
import signup from "./authimages/signup.jpg";
import "./authCss/signup.css";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("incorrect password");
    }
    setLoading(false);
  }
  return (
    <main className="main-sign">
      <section className="signup-grid">
        <main>
          <h3 style={{ marginLeft: "30px" }}> Login in</h3>
          {error && (
            <Alert severity="error">
              <Alert.Heading style={{ color: "red", marginLeft: "30px" }}>
                {" "}
                {error}
              </Alert.Heading>
            </Alert>
          )}
          <h6
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
          </h6>

          <div style={{ marginLeft: "30px" }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="e-mail">
                <Form.Control
                  style={{
                    width: "300px",
                    marginRight: "30px",
                    padding: "12px",
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
                  }}
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="password"
                />
              </Form.Group>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    background: "#53B175",
                    border: "none",
                    padding: "15px",
                    marginRight: "30px",
                    width: "250px",
                    borderRadius: "15px",
                    marginTop: "8px",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Login
                </button>
              </div>
            </Form>
          </div>

          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              marginTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <strong> Already Have an account?</strong>
            <Link to="/">signUp</Link>
          </div>
        </main>
        <div className="signup-img">
          <img width="100%" src={signup} alt=""></img>
        </div>
      </section>
    </main>
  );
}

export default Login;
