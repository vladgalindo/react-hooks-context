import React, {useContext} from 'react';
import { store } from '../store/index';

export const Loader = () => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    return (
        <div>
            <button onClick={() => {dispatch({type : 'loading'})}}> toggle loader</button>
        </div>
    )
}
