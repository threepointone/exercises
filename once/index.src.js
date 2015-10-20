export default function once(fn){
  let done = false, val;
  return function(...args){
    if (!done){
      val = this::fn(...args);
      done = true;
    }
    return val;
  };
}

