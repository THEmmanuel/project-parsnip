import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'

export const CALL_API = 'CALL_API';

const apiMiddleware = store => next => action => {
    const callApi = action(CALL_API);

    if (typeof callApi === 'undefined') {
        return next(action);
    }

    const [requestStartedType, successType, failureType] = callApi.types;
    next({ type: requestStartedType })
}

const makeCall = (endpoint) => {
    const url = `${API_BASE_URL}${endpoint}`;

    return axios
    .get(url)
    .then(res => {
        return res
    })
    .catch(err => {
        return err;
    });

}


export default apiMiddleware;