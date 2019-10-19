# Bp-react
React + Webpack + Babel boilerplate
To setup environment you need to invoke next commands.

### Part 1 - write app code
`Add gitignore`
```
$ touch .gitignore
$ echo node_modules > .gitignore
```

`init project`
```
$ npm init -y
$ mkdir public && cd public && touch index.html && cd ..
```

`Add index.html content:`
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
    </html>
```
`Add react dependences`
```
$ npm i react react-dom
```

```
$ touch App.js
```

`Add App.js content:`
```
import React from "react";
import ReactDOM from "react-dom";
import Imp from './Imp';

let rootContainer = document.getElementById('root');

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>React App</div>
                <Imp />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, rootContainer);
```


`$ touch Imp.js`
```
import React from "react";

class Imp extends React.Component {
    render() {
        let arr = ['a', 'b'];
        return  arr.map(el => <div>{el}</div>);
    }
}

export default Imp;
```
### Part 2 - bundle and transpile code
We will use two more technologies to build our app.
- [Webpack](https://webpack.js.org/concepts/) - will build our app from separated files
- [Babel](https://babeljs.io/setup#installation) - how to use with webpack
- [Babel](https://babeljs.io/docs/en/#jsx-and-react) - ES6 / JSX setup doc


`$ npm install --save-dev @babel/core @babel/preset-react babel-loader`
`$ touch .babelrc`

```
{
    "presets": ["@babel/preset-react"]
}
```

`$ npm i webpack webpack-cli -D`
`$ touch webpack.config.js`

```
const path = require("path");
const isDevelopment = true;

module.exports = {
    entry: './App.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: isDevelopment ? 'development' : 'production',
    module : {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}
```
`$ webpack`
