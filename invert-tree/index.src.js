export default function invert(node){
  return Object.assign(node, {
    ...(node.right ? {left: invert(node.right)} : {}),
    ...(node.left ? {right : invert(node.left)} : {})
  });
}
