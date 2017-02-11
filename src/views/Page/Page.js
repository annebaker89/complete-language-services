var React = require('react');
var i18n = require('i18next');

var TranslationService = require('TranslationService');

var Banner = require('Banner');
var NavigationBar = require('NavigationBar');
var FooterBar = require('FooterBar');

var Page = React.createClass({
    componentWillMount: function() {
        TranslationService.default.load('en').then(() => {
            console.log('Loaded translations.');
            this.forceUpdate();
        });
    },
    render: function() {
        return (
            <div>
                <div>
                    <Banner />
                    <NavigationBar />
                </div>
                <div className="b-pageContent-wrapper">
                    {this.props.children}
                </div>
                <FooterBar />
            </div>
        );
    }
});

module.exports = Page;
