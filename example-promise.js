function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('UK',function(err, temp) {
  if (err) {
    console.log('error', err)
  }
  else {
    console.log('success', temp)
  }
};

function getTempPromise(location) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){}
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('UK').then(function(temp) {
  console.log('promise succes', temo)
}, function(err) {
  console.log('promise error', err)
}

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    }
    else {
      reject("A & B need to be numbers");
    }
  })
}
