import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import users from './usersReducer';
import current_user from './currentUserReducer';
import my_partners from './myPartnersReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import business from './business-reducers';
import business_ad from './ads-reducer';

const rootReducer = combineReducers({
  users,
  current_user,
  my_partners,
  courses,
  authors,
  ajaxCallsInProgress,
  business,
  business_ad
});

export default rootReducer;
