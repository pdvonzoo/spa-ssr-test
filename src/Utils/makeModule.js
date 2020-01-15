import { makeReducer } from './test'

const [reqeust, success, failure, reducer] = makeReducer('SEARCH_ADMIN');

const SEARCH_ADMIN_REQUEST = reqeust;
const SEARCH_ADMIN_SUCCESS = success;
const SEARCH_ADMIN_FAILURE = failure;
export default reducer;
