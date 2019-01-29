export default store => next => action => {
    const {callAPI, ...rest} = action
    if (!callAPI) next(rest)
    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({...rest, response}))
        .catch(e => {})
}