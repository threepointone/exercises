export default function map(arr, fn, ctx){
  let res = [];
  for (var i = 0; i < arr.length; i++){
    res.push(fn.call(ctx, arr[i], i, arr));
  }
  return res;
}
