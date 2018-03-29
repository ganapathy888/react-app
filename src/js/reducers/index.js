// Vendor Imports
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Local Imports

// Combine Reducers
const rootReducer = combineReducers({
  // Redux form reducer must be last
  form: formReducer,
});

export default rootReducer;
