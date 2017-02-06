var React = require('react');
var { Link } = require('react-router');

var i18n = require('i18next');

var Main = React.createClass({
    render: function() {
        return (
            <div className="b-pageContent">
                <p>{i18n.t('consultationContent.part1')}</p>
                <p>{i18n.t('consultationContent.part2')}</p>
                <p>{i18n.t('consultationContent.part3')}</p>
                <p>{i18n.t('consultationContent.part4')}</p>
                <p>{i18n.t('consultationContent.part5')}</p>
            </div>
        );
    }
});

module.exports = Main;
