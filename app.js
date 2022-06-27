console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function watchTurorialCallback(callback, errorCallback) {
    let userLeft = false;
    let userWatchingLiveStream = true;
  
    if (userLeft) {
      errorCallback({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingLiveStream) {
      callback("Thumbs up and Subscribe");
    }
  }
  
  watchTurorialCallback(
    (message) => {
      console.log(message);
    },
    (error) => {
      console.log(error.name + " " + error.message);
    }
  );

  let promise = new Promise(() => {
      let userLeft = Boolean(Math.round(Math.random()));

      if (userLeft) {
          PromiseRejectionEvent("User left.");
       } else {
              resolve("Thumbs up and subscribe!");
          }
      }
  )   