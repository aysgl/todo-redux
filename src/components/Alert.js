import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Alert = () => {
    const state = useSelector((store) => store.alertReducer);
    const dispatch = useDispatch();

    setInterval(() => {
        dispatch({
            type: "CLEAR_ALERT"
        })
    }, 4000);

    return (
        state?.message ? (
            <div className={`alert alert-${state.type}`} role="alert">
                {state.message}
            </div>
        ) : null
    );
};

export default Alert;
