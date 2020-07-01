import angular from 'angular';
import '@uirouter/angularjs';
//import url("https://fonts.googleapis.com/icon?family=Material+Icons");


// Import your app stylesheets
import './style.css';
import './goldbeck-app-theme.scss';

// Import your app functionality
import './home'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);