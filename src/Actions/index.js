//Action creator
export const createPolicy = (name, amount) => {
    //Action
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}

export const deletePolicy = (name,amount) => {
    return {
        type: 'DELETE_POLICY',
        payload: name,
        amount: amount
    }
}

export const createClaim = (name, amount) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amount: amount
        }
    }
}