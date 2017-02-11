var React = require('react');
var { Link } = require('react-router');
var i18n = require('i18next');

var NavigationBar = React.createClass({
    render: function() {
        return (
            <div className="b-footerBar-wrapper">
                <div className="b-footerBar">
                    <Link to="/contact">
                        <span className="b-footerBar-contact-wrapper">
                            <span className="b-footerBar-contact">Contact</span>
                        </span>
                    </Link>
                </div>
            </div>
        );
    }
});

module.exports = NavigationBar;
