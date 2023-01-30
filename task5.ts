type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'
type ValidOrderStates = Exclude<OrderState, 'buyingSupplies' | 'producing'>

// Hint: with type guards return type can be removed
export const getUserOrderStates = (orderStates: OrderState[]) => {
    return orderStates.filter((state) => isValidState(state))
}

function isValidState(state: OrderState): state is ValidOrderStates {
    return state !== 'buyingSupplies' && state !== 'producing'
}