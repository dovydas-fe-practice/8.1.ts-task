// There is a generic function omit that removes a field from an object and returns it without this field
// Need to replace FIXME with the appropriate type

// NOTE: in this task you able to modify code in place where you assign FIXME type

export const omit = <T extends Record<any, any>, K extends keyof T>(obj: T, keyToOmit: K): Omit<T, K> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [keyToOmit]: _, ...withoutKey } = obj
    return withoutKey
}
