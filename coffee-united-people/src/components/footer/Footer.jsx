import "./footer.css";
import cat from "../../asssets/cat.png";

const Footer = () => {
  return (
    <footer className="py-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={cat} alt="Cat" className="cat" />
            <h3 className="text-center mb-0">Made by: Kia & Lauris</h3>
          </div>
          <div className="col-md-4">
            <ul className="ps-0 mb-0">
              <li className="footer-link">About</li>
              <li className="footer-link">Carriers</li>
              <li className="footer-link">FAQ</li>
              <li className="footer-link">Delete Lauris</li>
              <li className="footer-link">Contacts</li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="text-center mb-0">Copyright © 2022-2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
