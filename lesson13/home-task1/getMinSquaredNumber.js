export const getMinSquaredNumber = arr =>{
    if(!Array.isArray(arr) || arr.length === 0){
        return null;
    }
   let absArr = arr.map(el => Math.abs(el));
   return Math.pow(Math.min.apply(null,absArr),2);
}
//console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));