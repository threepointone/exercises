export default function flatten(thunk){
  return function(done){
    thunk((err, res) => {
      if (err){
        return done(err);
      }
      if (typeof res === 'function'){
        return flatten(res)(done);
      }
      done(null, res);
    });
  };

}
