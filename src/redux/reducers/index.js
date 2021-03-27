import { combineReducers } from "redux";

import stakeholderReducer from "./stakeholderReducer";
import informationElementReducer from "./informationElementReducer";
import relationshipReducer from "./relationshipReducer";
import applicationReducer from "./applicationReducer";

export default combineReducers({
    stakeholder: stakeholderReducer,
    informationElement: informationElementReducer,
    relationship: relationshipReducer,
    application: applicationReducer
});
