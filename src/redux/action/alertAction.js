export const alertAction = {
    SET_ALERT: 'SET_ALERT',
    CLEAR_ALERT: 'CLEAR_ALERT'
}

export const setAlert = (alert) => ({
    type: alertAction.SET_ALERT,
    payload: alert
})