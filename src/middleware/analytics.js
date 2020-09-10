const analytics = store => next => action => {
    if (!action || !action.meta || !action.meta.analytics) {
        return next(action);
    }

    const { event, data } = action.meta.analytics;

    mockAnalyticsAPI(event, data)
        .then(res => {
            console.log('Recorded: ', event, data);
        })
        .catch(err => {
            console.error('An error has occured', err.toStrng());
        })

    return next(action)
}

const mockAnalyticsAPI = (eventName, data) => {
    return new Promise((resolve, reject) => {
        resolve('success');
    });
}

export default analytics;