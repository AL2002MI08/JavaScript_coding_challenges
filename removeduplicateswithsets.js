// You're working with a list of product IDs that might contain duplicates. Use a Set to remove all duplicates and return the unique product IDs.
// 


function removeDuplicates(productIds){
    return [...new Set(productIds)].sort((a,b) => a - b);
}
const productIds = [1,2,4,1,9,0,2,5,4]

console.log(removeDuplicates(productIds))