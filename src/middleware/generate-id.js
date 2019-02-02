import uuidv1 from "uuid/v1";

export default store => next => action => {
    console.log('generate id');
    console.log(action);

    if(action.generateId) {
        action.generatedId = uuidv1();

    }

    next(action);
}