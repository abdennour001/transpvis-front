import { combineReducers } from "redux";

import stakeholderReducer from "./stakeholderReducer";
import informationElementReducer from "./informationElementReducer";
import relationshipReducer from "./relationshipReducer";
import applicationReducer from "./applicationReducer";
import helpReducer from "./helpReducer";
import vizReducer from "./vizReducer";

export default combineReducers({
    stakeholder: stakeholderReducer,
    informationElement: informationElementReducer,
    relationship: relationshipReducer,
    application: applicationReducer,
    help: helpReducer,
    viz: vizReducer
});
