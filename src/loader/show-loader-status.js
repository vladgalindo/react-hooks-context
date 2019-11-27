import React, {useContext} from 'react';
import {store} from '../store/index';

export const ShowLoaderStatus = () => {
    const globalState = useContext(store);

    return (
        <div>
            {`${globalState.state.loading}`}
        </div>
    )
}

