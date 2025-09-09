
let nums = [1, 2, 2, 3, 4, 5, 6, 6, 12];
function sumArray(nums) {
    let result = 0;
    for(const i of nums){
        result = result + i;
    }
    return result;
}
function findMax(nums) {
   let max = nums[0];
   for(const i of nums){
    if (i > max){
        max = i;
    }
   }
   return max;
}
function groupByCategory(data) {
  return data.products.reduce((acc, product) => {
    const { category, name, price } = product;
    
    acc[category] = [];
    
    acc[category].push({
      productName: name,
      price: price
    });
    
    return acc;
  }, {});
}
result = {
  "products": [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "id": 2, "name": "Book", "category": "Education", "price": 20 },
    { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
    { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
  ]
};
console.log("Сумма = ", sumArray(nums));
console.log("Максимальный элемент = ", findMax(nums));
console.log("Преобразование result:\n", groupByCategory(result));