type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'
type ValidOrderState = Exclude<OrderState, 'buyingSupplies' | 'producing'>

// Hint: with type guards return type can be removed
export const getUserOrderStates = (orderStates: OrderState[]) => {
    return orderStates.filter(isValidState)
}

function isValidState(state: OrderState): state is ValidOrderState {
    return state !== 'buyingSupplies' && state !== 'producing'
}