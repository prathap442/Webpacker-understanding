# important 
repo: https://github.com/vp-online-courses/webpack-tutorial

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
    // this is the entry point of the module
    entry: "./src/scripts/app.js",//path relative to this file
    output: {
        filename: "./dist/app.bundle.js"//path relative to this file
    }
  }
```


Now when i have made some changes in the webpack.config.json this resultedd in the correct output saying 

```
> webpack_course@1.0.0 build /home/prathap/Documents/webpack_course
> webpack

Hash: 08f375c167fd2287aaac
Version: webpack 4.42.0
Time: 307ms
Built at: 03/14/2020 4:00:59 PM
               Asset        Size  Chunks             Chunk Names
./dist/app.bundle.js  1010 bytes       0  [emitted]  main
Entrypoint main = ./dist/app.bundle.js
[0] ./src/scripts/app.js + 1 modules 307 bytes {0} [built]
    | ./src/scripts/app.js 66 bytes [built]
    | ./src/helloworld.js 241 bytes [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

this generates the hash that is the unique and for the every file that  


# What are the webpack loaders?
  the webpack loaders are the javascript libraries that help the webpack not only to compress the javascripts into the bundled file(app.bundle.js) but also the html and css and images

* Looking at how to handle images with the loader of the image into the .

Now we will make use of the file-loader


```
 $ npm install file-loader --save-dev
```


```
// webpack.config.js


> webpack_course@1.0.0 build /home/prathap/Documents/webpack_course
> webpack

Hash: 4d3615d23c73961b14cd
Version: webpack 4.42.0
Time: 266ms
Built at: 03/14/2020 7:29:53 PM
        Asset      Size  Chunks             Chunk Names
app.bundle.js  14.9 KiB       0  [emitted]  main
Entrypoint main = app.bundle.js
[0] ./src/scripts/app.js 126 bytes {0} [built]
    + 5 hidden modules

```

