export const CALL_API = 'CALL_API';

const apiMiddleware = store => next => action => {
    const callApi = action(CALL_API);

    if (typeof callApi === 'undefined') {
        return next(action);
    }

    const [requestStartedType, successType, failureType] = callApi.types;
    next({type : requestStartedType})
}


export default apiMiddleware;