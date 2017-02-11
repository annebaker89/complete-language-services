var React = require('react');
var { Link } = require('react-router');
var i18n = require('i18next');

var NavigationBar = React.createClass({
    render: function() {
        return (
            <div className="b-navigationBar-wrapper">
                <div className="b-navigationBar">
                    <Link to="/about"><span className="b-navigationBar-element">{i18n.t('navigation.about')}</span></Link>
                    <Link to="/translation"><span className="b-navigationBar-element">{i18n.t('navigation.translation')}</span></Link>
                    <Link to="/interpreting"><span className="b-navigationBar-element">{i18n.t('navigation.interpreting')}</span></Link>
                    <Link to="/proofreading"><span className="b-navigationBar-element">{i18n.t('navigation.proofreading')}</span></Link>
                    <Link to="/english"><span className="b-navigationBar-element">{i18n.t('navigation.english')}</span></Link>
                    <Link to="/consultation"><span className="b-navigationBar-element">{i18n.t('navigation.consultation')}</span></Link>
                    <Link to="/tutoring"><span className="b-navigationBar-element">{i18n.t('navigation.tutoring')}</span></Link>
                </div>
            </div>
        );
    }
});

module.exports = NavigationBar;
