import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-nav-container">
                <ul className="footer-nav">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Donations</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <p>
                  Copyright &copy; 2018 by Carlos. All right reserved.
                      </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-nav-container">
                <ul className="footer-nav-icons">
                  <li>
                    <a href="https://cr.linkedin.com/in/carlos-bonilla-robles-108a8b107">
                      <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/rada2491?tab=repositories">
                      <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/carlos.bonillarobles">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer