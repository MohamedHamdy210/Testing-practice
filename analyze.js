function analyze(arr) {
    let min =arr[0];
    let max = arr[0];
    let sum=0;
    for(let i =0;i<arr.length;i++){
        if (arr[i]<min) {
            min=arr[i];
        }else if(arr[i]>max){
            max=arr[i]
        }
        sum+=arr[i];
    }
    return {
      average: sum / arr.length,
      min: min,
      max: max,
      length: arr.length
    };
}
console.log(analyze([1,8,3,2,4,6]))
module.exports=analyze;