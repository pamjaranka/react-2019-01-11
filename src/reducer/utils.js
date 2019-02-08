import {OrderedMap, List} from 'immutable';

export function arrToMap(arr, ItemRecord) {
    return arr.reduce(
        (acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item),
        new OrderedMap()
    )
}

export function arrFromIds(arr) {
    const result = [];
    arr.forEach((item) =>  {
        result.push(item.id);
    })

    return result;
}
