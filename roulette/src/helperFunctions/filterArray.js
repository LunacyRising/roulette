
export const filterArray = (arr, key, value) => {
    return arr.filter(item => {
        return item[key] !== value
    })
}