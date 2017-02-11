var React = require('react');
var ReactDOM = require('react-dom');
import { Route, Router, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

var Page = require('Page');
var Main = require('Main');
var MainAr = require('MainAr');
var About = require('About');
var Translation = require('Translation');
var Interpreting = require('Interpreting');
var Proofreading = require('Proofreading');
var English = require('English');
var Consultation = require('Consultation');
var Tutoring = require('Tutoring');
var Contact = require('Contact');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('applicationStyles');

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
    <Router history={appHistory}>
        <Route path="/" components={Page}>
            <IndexRoute component={Main} />
            <Route path="/ar" component={MainAr} />
            <Route path="/about" component={About} />
            <Route path="/translation" component={Translation} />
            <Route path="/interpreting" component={Interpreting} />
            <Route path="/proofreading" component={Proofreading} />
            <Route path="/english" component={English} />
            <Route path="/consultation" component={Consultation} />
            <Route path="/tutoring" component={Tutoring} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>,
    document.getElementById('app')
);
