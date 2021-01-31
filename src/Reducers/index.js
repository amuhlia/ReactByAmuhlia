import { combineReducers } from "redux"

//Reducers
const policies = (listPolicies = [], action) => {
    let listPoliciesCopy = listPolicies
    switch(action.type){
        case"CREATE_POLICY":
            return [...listPolicies, action.payload.name]
        case "DELETE_POLICY":
            let newList = listPoliciesCopy.filter((name) => {
                return name !== action.payload
            })
            return newList
        default:
            return listPoliciesCopy
    }
}

const bank = (totalAmount = 0, action) => {
    let value = 0
    if(action.payload && action.payload.amount)
        value = parseFloat(action.payload.amount)
    else
        value = parseFloat(totalAmount)

    switch(action.type){
        case "CREATE_POLICY":
            let newAmount = totalAmount + value
            return newAmount
        case "DELETE_POLICY":
            let newAmountM = totalAmount - value
            return newAmountM
        default:
            return totalAmount
    }
}

const claimHistory = (listOfClaims = [], action) => {
    switch(action.type){
        case "CREATE_CLAIM":
            return [...listOfClaims, action.payload]
        default:
            return listOfClaims
    }
}

// const departments = combineReducers({
//     listPolicies: policies,
//     totalAmount: bank,
//     listOfClaims: claimHistory
// })

// export default departments

export default combineReducers({
    listPolicies: policies,
    totalAmount: bank,
    listOfClaims: claimHistory
})