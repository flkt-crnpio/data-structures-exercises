function hourglass(arr){
  let max = false;
  for(let i = 0; i < arr.length - 2; i++ ){
    for(let j = 0; j < arr.length - 2; j++ ){
      let sum = arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
      if(max === false){
        max = sum;
      }
      if(sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

const arr = [[0,1,2,3,4,5],[1,2,3,4,5,6],[2,3,4,5,6,7],[3,4,5,6,7,8],[4,5,6,7,8,9],[5,6,7,8,9,0]];
console.log(hourglass(arr));
