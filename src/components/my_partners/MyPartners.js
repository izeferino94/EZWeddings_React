import React from 'react';
import User from './User';
import Title from '../common/Title';
import '../../styles/client_list.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadUsers, getCurrentUser} from '../../actions/usersActions';

class MyPartners extends React.Component {
    
    render() {
      const my_partners = Object.assign({}, this.props.my_partners);
      const partners = Object.keys(my_partners);
      const users = Object.assign({}, this.props.users);
      const current_user = this.props.current_user.current_user.slice(0);
      const account_type = users[current_user].account_type;
      let bg_pic = "../title_bg5.jpeg";
      let title_text = "Collaborators";

      if(account_type == "business") {
        bg_pic = "../title_bg4.jpeg";
        title_text = "My Clients";
      }

      let partners_list = [];

      for(let i = 0; i < partners.length; i++) {
        let partner = users[partners[i]];
        let uid = partner.uid;
        let profile_pic = partner.profile_pic;
        let name = partner.fname;
        if(account_type == "business") {
          name += " " + partner.lname;
        }
        partners_list.push(<User img={profile_pic} uid={uid}>{name}</User>);
      }

    return (
      <div>
        <Title img={bg_pic}>{title_text}</Title>
        <div id="client-list" style={{textAlign: "center"}}>{partners_list}</div>
      </div>
    );
    }
  }

  
  function mapStateToProps(state) {
    return {
      users: state.users,
      current_user: state.current_user,
      my_partners: state.my_partners[state.current_user.current_user]
    };
  }

  
  export default connect(mapStateToProps)(MyPartners);