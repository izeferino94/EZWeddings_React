/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//import {loadCourses} from './actions/courseActions';
//import {loadAuthors} from './actions/authorActions';
//import './styles/styles.css'; //Webpack can import CSS files too!
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
//store.dispatch(loadCourses());
//store.dispatch(loadAuthors());

const users = {
  rosa_melano: {
    uid: "rosa_melano",
    contact_info: {
      name: "Rosa Melano",
      phone_number: "888-888-8888",
      email: "rosa_melano@email.com"
    },
    profile_pic: "client2.jpeg",
    account_type: "planner",
    partners: ["fairbanks"]
  },
  elver_galarga: {
    uid: "elver_galarga",
    contact_info: {
      name: "Elver Galarga",
      phone_number: "888-888-8888",
      email: "elver_galarga@email.com"
    },
    profile_pic: "elver_galarga.jpg",
    account_type: "planner",
    partners: ["tacos_el_gordo", "fairbanks", "banda_ms"]
  },
  john_smith: {
    uid: "john_smith",
    contact_info: {
      name: "John Smith",
      phone_number: "888-888-8888",
      email: "john_smith@email.com"
    },
    profile_pic: "john_smith.jpg",
    account_type: "planner",
    partners: ["tacos_el_gordo", "fairbanks", "banda_ms"]
  },
  jane_doe: {
    uid: "jane_doe",
    contact_info: {
      name: "Jane Doe",
      phone_number: "888-888-8888",
      email: "jane_doe@email.com"
    },
    profile_pic: "jane_doe.jpeg",
    account_type: "planner",
    partners: ["tacos_el_gordo", "fairbanks", "banda_ms"]
  },
  fairbanks: {
    uid: "fairbanks",
    contact_info: {
      name: "Fairbanks Ranch Country Club",
      phone_number: "858-356-2135",
      email: "info.frcc@bayclubs.com",
      address: "15150 San Dieguito Road, Rancho Santa Fe, CA 92067"
    },
    profile_pic: "wedding_venue_1.jpg",
    account_type: "business",
    partners: ["rosa_melano", "elver_galarga", "john_smith", "jane_doe"],
    ad: ""
  }
};

localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("current_user", "fairbanks");

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);