import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import Title from './Title';
import '../../styles/font.css';
import '../../styles/w3.css';
import '../../styles/nav_bar.css';

const Header = ({location}) => {
  let loc = location.pathname;
  let users = JSON.parse(localStorage.getItem("users"));
  let current_user = localStorage.getItem("current_user");
  let user = users[current_user];
  let account_type = user.account_type;
  
if (loc == "/") {
    return (
      <div>
        <ul id="nav-bar">
          <li className="nav-item" style={{float: "right"}}><IndexLink to="/login" className="active">Login</IndexLink></li>
          <li className="nav-item" style={{float: "right"}}><IndexLink to="/register" className="active">Register</IndexLink></li>
        </ul>
      </div>
    );
} else if (loc == "/register"){
  return( 
    <div>
      <ul id="nav-bar">
          <li className="nav-item"><Link to="/">Home</Link></li>
        </ul>
    </div>);
}else if (loc == "/account_recovery"){
  return( 
    <div>
      <ul id="nav-bar">
          <li className="nav-item"><Link to="/">Home</Link></li>
        </ul>
    </div>);
}else {
    return (
      <div>
        <ul id="nav-bar">
          <li className="nav-item"><Link to="/my_account">Home</Link></li>
          <li className="nav-item"><Link to="/settings">Setting</Link></li>
          <li className="nav-item" style={{float: "right"}}><IndexLink to="/" className="active">Logout</IndexLink></li>
        </ul>
      </div>
    );
  }
};


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
    ad: {},
    business_type: ["foodNdrinks"]
  }
};
export const current_user = "tacos_el_gordo";
export default Header;
