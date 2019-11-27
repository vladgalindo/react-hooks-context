import React, {createContext, useReducer} from 'react';

const initialState = {
    loading: true,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( {children} ) => {
    const [state, dispatch] = useReducer((prevState, action) => {
        switch (action.type) {
            case 'loading':
                return Object.assign({},
                    {...prevState},
                    {
                    loading: !prevState.loading
                    });

            default:
                return prevState
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>
};

export { store, StateProvider }
