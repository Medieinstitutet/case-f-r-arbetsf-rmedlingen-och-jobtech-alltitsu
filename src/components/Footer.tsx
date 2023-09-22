import '../styles/Footer.scss';
import { FooterWrapper } from './styled/Wrappers';

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-left">
        <h3>Alltitsu</h3>

        <p className="footer-about">
          Ett engagerat team av dataentusiaster med uppdraget att revolutionera hur människor närmar
          sig jobbsökningar och arbetskraftsplanering.
        </p>

        <p className="footer-company-name">Alltitsu © 2023</p>
      </div>

      <div className="wrapper">
        <div className="footer-center">
          <div className="contact-info">
            <i className="fa fa-map-marker"></i>
            <p>
              Alltitsugatan 23
              <br /> 245 50, Göteborg
            </p>
          </div>

          <div className="contact-info">
            <i className="fa fa-phone"></i>
            <p>046-258496</p>
          </div>

          <div className="contact-info">
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@alltitsu.com">support@alltitsu.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <h3>Sociala medier</h3>
        <div className="footer-icons">
          <a href="#">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};
