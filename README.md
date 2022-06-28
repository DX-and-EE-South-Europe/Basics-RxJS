# RxjsApp

This project is for learninig the basics of RxJs through interactive examples.

### Project status

Work in progress

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Installation](#installation)
- [Development server](#development-server)
- [Architecture](#architecture)
- [Structure folder](#structure-folder)
- [Features improvements](#features-improvements)
- [Contributing](#contributing)

## General info

The current version includes the next sections:

- **Observables**: Basics aspects of Observables.
- **Operators**: Main common operators.
- **Functions**: Main common functions.

Also, this project implements the use of rxjs. You can watch the use in real time in `visual-demo` and `generator-content-data-page` components.

## Technologies

- Angular 13
- RxJS 7

## Installation

Clone this project and install it locally using npm:

```sh
 git clone https://github.com/CristinaRibateCog/rxjs-app.git
 cd rxjs-app
 npm install
```

## Development server

To run this project in dev-server:

```sh
 npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can also:

- `npm run start-angular` to start only the app without the json server (some interactive examples doesn't run correctly).

- `npm run start-api` to start only the json server in `http://localhost:3000`.

## Architecture

Each section of the app, has its own navbar to navigate to its subsections.

By default, the section loads the `home-page` of that section. When you navigate to any subsection, it loads the subsection page. Each subsection includes a description, a diagram and a list of interactive examples.

> **Note:** If the app cannot match the subsection path with the corresponding data of the subsection, the app will redirect to the main path

## Structure folder

```
.
├── src
│  ├── app
│  │  ├── common
│  │  │  ├── const
│  │  │  │  └── /folder of section/
│  │  │  │     ├── /folder data-subsections/
│  │  │  │     ├── /list-data-subsections.ts/
│  │  │  │     └── /nav-section.ts/
│  │  │  ├── interfaces
│  │  │  ├── utils
│  │  │  └── types.ts
│  │  ├── components
│  │  ├── directives
│  │  ├── guards
│  │  ├── pages
│  │  ├── services
│  │  ├── pages
│  │  ├── app-routing.module.ts
│  │  ├── app.component.html
│  │  ├── app.component.scss
│  │  ├── app.component.ts
│  │  └── app.module.ts
│  │
│  ├── assets
│  │   └── img
│  │      └── diagrams
│  │
│  ├── styles
│  │   ├── reset.scss
│  │   ├── styles.scss
│  │   └── var.scss
│  └── index.html
└── ...
```

## Features improvements

- Refactor app.
- Refactor styles.
- Add optional description each demo.
- Add test.
- New sections: multicasted observables, marble testing...

## Contributing

[Contributing guide](CONTRIBUTING.md)
