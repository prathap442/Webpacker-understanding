const helloworld = () => {
  console.log("Hello World");
}


// to make the above function being exported to some other file where the some other file tries to import this file
// we use this es6 syntax as follows

export default helloworld;