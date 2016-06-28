var React = require('react');
var i18n = require('i18next');

var Banner = React.createClass({
    render: function() {
        return (
            <div className="b-banner">
                <div className="b-banner-content">
                    <div className="b-banner-logo" />
                    <div className="b-banner-title">
                        <ul>
                            <li>Complete Language Services</li>
                            <li>كاملةاللغة خدمات</li>
                            <li>Services Complètes de Langues</li>
                            <li>完整的语言服务</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Banner;
