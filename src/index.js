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

export const users = {
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
    ad: {},
    business_type: ["venues"]
  },
  banda_ms: {
    uid: "banda_ms",
    contact_info: {
      name: "Banda MS",
      phone_number: "777-777-7777",
      email: "banda_ms@email.com",
      address: "Mazatlan, Sinaloa, Mexico"
    },
    profile_pic: "banda_ms.jpg",
    account_type: "business",
    partners: ["rosa_melano", "elver_galarga", "john_smith", "jane_doe"],
    ad: {},
    business_type: ["entertainment"]
  },
  tacos_el_gordo: {
    uid: "tacos_el_gordo",
    contact_info: {
      name: "Tacos El Gordo",
      phone_number: "619-691-8848",
      email: "tacos_el_gordo@email.com",
      address: "689 H St, Chula Vista, CA 91910"
    },
    profile_pic: "TACOS.png",
    account_type: "business",
    partners: ["rosa_melano", "elver_galarga", "john_smith", "jane_doe"],
    ad: {
      title: "Taco Bonita",
      name: "Tacos El Gordo",
      img: "TACOS.png",
      description: "The best Tacos in a 3ft radius",
      email: "tacos_el_gordo@email.com",
      phone_number: "619-691-8848",
      address: "689 H St, Chula Vista, CA 91910",
      categories: ["foodNdrinks"]
      },
    business_type: ["foodNdrinks"]
    }   
};

export const current_user = "tacos_el_gordo";

localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("current_user", "tacos_el_gordo");


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);