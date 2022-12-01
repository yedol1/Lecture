//Actions
const ADD = "ADD";

export const addList = (item) => {
    return {
        type: ADD,
        payload: item,
    };
};

//초기값
const initialState = {
    list: [],
};

export default function addShoppingList(state = initialState.list, action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}
