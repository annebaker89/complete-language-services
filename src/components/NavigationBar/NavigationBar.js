var React = require('react');
var { Link } = require('react-router');
var i18n = require('i18next');

var NavigationBar = React.createClass({
    render: function() {
        return (
            <div className="b-navigationBar-wrapper">
                <div className="b-navigationBar">
                    <div className="b-navigationBar-element"><Link to="/about">{i18n.t('navigation.about')}</Link></div>
                    <div className="b-navigationBar-element"><Link to="/translation">{i18n.t('navigation.translation')}</Link></div>
                    <div className="b-navigationBar-element"><Link to="/interpreting">{i18n.t('navigation.interpreting')}</Link></div>
                    <div className="b-navigationBar-element"><Link to="/proofreading">{i18n.t('navigation.proofreading')}</Link></div>
                    <div className="b-navigationBar-element"><Link to="/english">{i18n.t('navigation.english')}</Link></div>
                    <div className="b-navigationBar-element"><Link to="/consultation">{i18n.t('navigation.consultation')}</Link></div>
                    <div className="b-navigationBar-element"><Link to="/tutoring">{i18n.t('navigation.tutoring')}</Link></div>
                </div>
            </div>
        );
    }
});

module.exports = NavigationBar;
