import { combineReducers } from "redux";

import stakeholderReducer from "./stakeholderReducer";
import informationElementReducer from "./informationElementReducer";
import relationshipReducer from "./relationshipReducer";
import applicationReducer from "./applicationReducer";
import helpReducer from "./helpReducer";
import vizReducer from "./vizReducer";
import authReducer from "./authReducer";

export default combineReducers({
    stakeholder: stakeholderReducer,
    informationElement: informationElementReducer,
    relationship: relationshipReducer,
    application: applicationReducer,
    help: helpReducer,
    viz: vizReducer,
    auth: authReducer
});
