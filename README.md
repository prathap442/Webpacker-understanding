this is the webpacker course that comes from the udemy 

```
  webpacker is basically used for compiling all of your javascripts and the sylesheets and being used later in the application it becomes like a single js and css file so this process of segmenting into the various files is the work of the webpacker and the webpacker uses the dependency graph inturn to construct all of the modules of the js, css, png, img and all

```

- wrong way
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <script src="./src/index.js"></script>
    <script src="./src/helloworld.js"></script>
    </body>
    </html>
```
- right way

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <script src="./src/helloworld.js"></script>
  <script src="./src/index.js"></script>
</body>
</html>
```



# step1
If we look the shot1.png it says that it cannot use import statement outside the module becuase in the index.html function declaration file should be called first followed by function invocation later .




So what webpacker does  as shown above does the process and the problem faced at the step1 that is due to the dependencies can be resolved easily by the webpack and how it is being listed further


to work with the webpack it requires the package.json and this can be obtained by doing 

```
 npm init -y
 # this generates the package.json file
```

```
  // this is used to get the webpack and the webpack-cli packages of the node
  $ npm install webpack webpack-cli --save-dev 
  // the command above does the process of the creation of the nodemodules that are required to work with webpack and then with the webpacker too .

```

```
 $ touch webpack.config.js
 # this command creates the configuration file for the webpack that is required for the webpack to help in the path creation like where should the files that are compiled need to be placed .
 module.exports = {
  entry: './src/index.js' // this indicates the entry point file
  output: {
    filename: bundle.js,
    path: './dist/'  
  }
 }
```