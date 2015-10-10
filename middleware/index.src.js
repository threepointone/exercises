export default class Middleware{
  constructor(){
    this.chain = [];
  }
  use(fn){
    this.chain.push(fn);
  }
  go(fn){
    let ctx = {}, ctr = 0, chain = this.chain;
    function advance(){

      if (ctr === chain.length){
        return ctx::fn();
      }
      ctr++;
      ctx::(chain[ctr - 1])(advance);
    }
    advance();
  }
}
