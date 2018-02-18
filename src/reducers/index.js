import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import FeatureReducer from './FeatureReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer,
  feature: FeatureReducer
});

export default rootReducer;
