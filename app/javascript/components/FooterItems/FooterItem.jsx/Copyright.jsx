import React from 'react';
// import Aux from '../../hoc/Aux/Aux';

const copyright = () => (
  <div>
    <footer className="footer-area bg-violet text-center pt-27 pb-32 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-text">
              <span className="block">
                Copyright&copy; 2020
                {' '}
                <a href="/">Real Estate Team</a>
                . All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default copyright;
