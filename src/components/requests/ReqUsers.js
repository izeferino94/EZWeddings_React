import React from 'react';
import {Link} from 'react-router';
import '../../styles/request.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPartner} from '../../actions/requestAction'


const ReqUsers = (props) => {
    const user = "/requests/"+props.uid;
    return(
        <div className="client">
                <h3>{props.children}</h3>
                <img src={props.img} className="client-picture"/>
                <p id = "request-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel imperdiet lorem. 
                    Donec consequat quam quis ante mattis tincidunt. Curabitur eros nunc, condimentum sed leo 
                    elementum, placerat venenatis ipsum. Phasellus nulla velit, venenatis eget lorem id, cursus 
                    molestie erat. Ut neque ante, consectetur venenatis imperdiet ac, volutpat id libero. Sed 
                    sed lorem dignissim, bibendum lacus eget, tincidunt justo. Maecenas eu quam eget velit 
                    commodo hendrerit vel eu odio. Pellentesque eget auctor lorem, vitae efficitur ligula. Proin 
                    posuere augue eu lorem auctor consequat. Proin sit amet volutpat nisi, at tristique tellus. 
                    Maecenas in nisi vitae dui volutpat luctus eget eget elit.</p>
                <br />
                <div className = "moveItem" >Number: {props.num}</div>
                <div className = "moveItem1" >Email: {props.email}</div>
                <button id={props.uid} className = "accept-button" onClick={function(){addPartner(props)}} >Accept</button>
                <button id={props.uid} className = "deny-button" onClick={props.remove}>Deny</button>
            </div>
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addPartner: addPartner},dispatch);

}

function mapStateToProps(state) {
    return {
      //user: state.requestReducer,
      //current_user: state.current_user,
      //my_partners: state.my_partners[state.current_user.current_user]
    };
  }


export default connect(mapStateToProps,matchDispatchToProps)(ReqUsers);