/*
 * Sort an Array of Objects 
 * Arguments #dataArray #field
 */

export const objArraySort = (dataArray, field) => {
    return array.sort((a, b) => {
        return a[field] - b[field];
    }) 
}