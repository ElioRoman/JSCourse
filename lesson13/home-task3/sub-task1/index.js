export const reverseArray = arr =>{
  const arr2 = [];
  if (!Array.isArray(arr)){
      return null;
  }
  for (let i=arr.length-1; i>=0; i--){
   arr2.push(arr[i]);   
  }
  return arr2;
}