var React = require('react');
var i18n = require('i18next');

var TranslationService = require('TranslationService');

var Main = React.createClass({
    componentWillMount: function() {
        TranslationService.default.load('ar').then(() => {
            console.log('Loaded translations.');
            this.forceUpdate();
        });
    },
    render: function() {
        return (
            <div>
                <p>{i18n.t('key')}</p>
                <button className="button small lang" data-lang="en">Eng</button>
                <button className="button small lang" data-lang="ar">Arb</button>
            </div>
        );
    }
});

module.exports = Main;
