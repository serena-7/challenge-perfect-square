// function perfectSquare(num){
//     let sqrt = Math.sqrt(num);
//     if (sqrt === Math.floor(sqrt)){
//         return (sqrt + 1) ** 2;
//     } else {
//         return -1;
//     }
// }

const perfectSquare = num => (Number.isInteger(Math.sqrt(num))) ? (Math.sqrt(num) + 1)**2 : -1;

console.log(perfectSquare(9))