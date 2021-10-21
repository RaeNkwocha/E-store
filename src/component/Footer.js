import React, { useEffect, useState } from "react";
import "../css/footer.css";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-flex">
          <h5> &copy;{date} copyright</h5>
          <h5>Rae Nkwocha</h5>
          <h5>
            <a
              href="https://www.themealdb.com/api.php"
              rel="noreferrer"
              target="_blank"
            >
              Api
            </a>
          </h5>
        </div>
        <div className="footer-flex">
          <h5>
            <a
              href="https://github.com/RaeNkwocha/Food-app"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </h5>
          <h5>
            {" "}
            <a
              href="https://raenewsblog.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              Portfolio
            </a>
          </h5>
          <h5>raenkwocha@gmail.com</h5>
        </div>
        {/* <h5 style={{ textAlign: "center" }}>Frontend Developer</h5> */}
      </footer>
    </>
  );
};

export default Footer;
