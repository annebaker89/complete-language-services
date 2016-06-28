var React = require('react');
var i18n = require('i18next');

var TranslationService = require('TranslationService');

var Main = React.createClass({
    componentWillMount: function() {
        TranslationService.default.load('en').then(() => {
            console.log('Loaded translations.');
            this.forceUpdate();
        });
    },
    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
