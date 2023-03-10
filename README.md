## Using Lerna

Install Lerna
``` bash
$ npm i -g lerna
```

Recursively install dependencies for client and server
``` bash
$ lerna bootstrap
```

Start dev server for both client and server
``` bash
$ lerna run start:dev
```

## Manually
### Server

#### Installation

From root directory
``` bash
$ yarn --cwd packages/server/ install
```

##### Start DEV Server

From root directory
``` bash
$ yarn --cwd packages/server/ start:dev
```

##### Or Start Server

From root directory
``` bash
$ yarn --cwd packages/server/ start
```

### Client

#### Installation

##### From root directory

``` bash
$ yarn --cwd packages/client/ install
```

#### Start DEV Server

From root directory
``` bash
$ yarn --cwd packages/client/ start:dev
```

> **Note** Access web app on `http://localhost:2345/`

![Dec-20-2022 19-19-42](https://user-images.githubusercontent.com/15639127/208750288-5593e43c-cc0d-47f5-bda0-c1d7dad842b4.gif)

### Possible Improvements
* Provide unit test coverage for util functions, hooks and components.
* Move line chart to the left in order to dovetail with the bar chart.
* Use a different charting library that supports treeshaking.
* Use D3 to create more custom visualisations.
