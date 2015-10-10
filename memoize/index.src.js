const cache = {};
const has = {}.hasOwnProperty;


export default function memoize(fn){
  return function(...keys){
    let key = keys.join(':');
    if (cache::has(key)){
      return cache[key];
    }
    cache[key] = fn(...keys);
    return cache[key];
  };
}
