var React = require('react');
var { Link } = require('react-router');
var i18n = require('i18next');

var NavigationBar = React.createClass({
    render: function() {
        return (
            <div className="b-navigationBar-wrapper">
              <div className="b-navigationBar">
                <div className="b-navigationBar-element"><Link to="/">{i18n.t('navigation.translation')}</Link></div>
                <div className="b-navigationBar-element"><Link to="/">{i18n.t('navigation.interpreting')}</Link></div>
                <div className="b-navigationBar-element"><Link to="/">{i18n.t('navigation.proofreading')}</Link></div>
                <div className="b-navigationBar-element"><Link to="/">{i18n.t('navigation.english')}</Link></div>
                <div className="b-navigationBar-element"><Link to="/">{i18n.t('navigation.consultation')}</Link></div>
                <div className="b-navigationBar-element"><Link to="/">{i18n.t('navigation.tutoring')}</Link></div>
              </div>
            </div>
        );
    }
});

module.exports = NavigationBar;
