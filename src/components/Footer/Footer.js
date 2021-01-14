import React from 'react';

import './footer.scss';

const Footer = ({years}) => (
    <footer>
        <p className="copyright">
            DevOfThrones, le blog du développeur React&nbsp;- {years} &copy;
        </p>
    </footer>
);

export default Footer;