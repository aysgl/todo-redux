import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../redux/alertSlice';

const Alert = () => {
    const state = useSelector((store) => store.alert);
    const dispatch = useDispatch();

    setInterval(() => {
        dispatch(clearAlert())
    }, 6000);

    return (
        state?.message ? (
            <div className={`alert alert-${state.type}`} role="alert">
                {state.message}
            </div>
        ) : null
    );
};

export default Alert;
