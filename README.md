### Server

#### Installation

##### From root directory

``` bash
$ yarn --cwd packages/server/ install
```

### Start DEV Server

##### From root directory

``` bash
$ yarn --cwd packages/server/ start:dev
```

### Start Server

##### From root directory

``` bash
$ yarn --cwd packages/server/ start
```

### Client

#### Installation

##### From root directory

``` bash
$ yarn --cwd packages/client/ install
```

### Start DEV Server

##### From root directory

``` bash
$ yarn --cwd packages/client/ start:dev
```

> **Note** Access web app on `http://localhost:2345/`


### Possible Improvements
* Provide unit test coverage for util functions, hooks and components.
* Move line chart to the left in order to dovetail with the bar chart.
* Use a different charting library that supports treeshaking.
* Use D3 to create more custom visualisations.
