let numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
let maxi = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > maxi){
        maxi = numbers[i]        
    }
}
console.log(maxi)

