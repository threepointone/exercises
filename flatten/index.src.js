export default function flatten(inputArr){
  return inputArr.reduce((arr, el) =>  [...arr, ...(Array.isArray(el) ? flatten(el) : [el])], []);
}
