export default function search(arr, key, start = 0, end = arr.length - 1){
  if (end === start){
    if (arr[start] === key){
      return start;
    }
    return -1;
  }
  if (start > end) {
    return -1;
  }
  let mid = Math.floor(start + (end - start + 1) / 2);
  if (arr[mid] === key){
    return mid;
  }
  if (arr[mid] > key){
    return search(arr, key, start, mid - 1);
  }
  if (arr[mid] < key){
    return search(arr, key, mid + 1, end);
  }
}

