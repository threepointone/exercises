function log(msg){
  console.log( msg !== undefined ? msg : this);
  return this;
}

export function sequence(thunks){
  return function(done){
    let ctr = 0;
    function advance(data){
      thunks[ctr]((err, res) => {
        if (err){
          return done(err);
        }
        ctr++;
        if (ctr === thunks.length){
          done(null, res);
        }
        else {
          advance(res);
        }
      }, data);
    }
    advance();
  };
}

export function parallel(thunks){
  return function(done){
    let ctr = 0, arr = [], failed;
    function andThen(i, err, res){
      if (err){
        failed = true;
        return done(err);
      }
      if (!failed){
        ctr++;
        arr[i] = res;
        if (ctr === thunks.length){
          done(null, arr);
        }
      }
    }
    thunks.forEach((thunk, i) =>
      thunk((err, res) => andThen(i, err, res)));
  };
}

export function race(thunks){
  return function(done){
    let winner;
    thunks.forEach(thunk => thunk((err, res) => {
      if (err && !winner){
        winner = 'broken';
        return done(err);
      }
      if (!winner){
        winner = res;
        done(null, winner);
      }
    }));
  };
}
