export default function value(fn){
  if (typeof fn === 'function'){
    return value(fn());
  }
  return fn;
}
