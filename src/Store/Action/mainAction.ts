export const mainAction = (type:string, payload: {}) => {
    return({
        type: type,
        payload: payload
    })
}