**DISCLAIMER: This repository is an experimental guide and a sandbox for developmental purposes.**

# [Marigold](http://federalist.18f.gov.s3-website-us-east-1.amazonaws.com/site/18F/marigold/)

An experimental set of common and reusable components and tools for building websites and applications at 18F.

## Running locally

Marigold is built with [Fractal](http://fractal.build/), a static site framework for building and documenting component libraies.

You will need to make sure that you have the following installed on your machine before following the commands below.

- Node v4.4.7+, [Installation guide, various platforms](https://nodejs.org/en/download/)

To start, run the following command to install project dependencies:

```sh
npm install
```

Next, we'll perform a build step to create the site and test the build process:

```sh
npm run build
```

Now that all of your dependencies are installed you can run you local server by running the following command:

```sh
npm start
```

Go to `http://localhost:3000` in your browser, and you should be viewing a local instance of Marigold.
