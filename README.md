# 🚀 Spacetrips

Don't you ever wanted to travel to space? Discover new planets, new galaxies
and see earth from outside?

Your dreams will come true with `Spacetrips`. With `Spacetrips` you can book
future `SpaceX` mission launches, and travel to space as you watched on the
movies.

Not!!! This is a personal project that I've created during my studies with
the Apollo GraphQL fullstack tutorial [https://www.apollographql.com/docs/react/](https://www.apollographql.com/docs/react/).

It's intent is to make me practice `GraphQL` and `React` to build web apps. I
strongly encourage you to follow the `Apollo` tutorial. If you have any doubts,
don't hesitate to ask me.

I've made some changes to the tutorial code to fulfill my curiosities, like:

- Changed the design
- `Styled Components` over `emotion`. I like `emotion` but I've never used
  `Styled Components` before, so.
- Implemented a real world authentication method
- React Hooks

## Running it locally

### Requirements

- Node.js
- Yarn

Check the `engines` in the `package.json` file for versions.

### Setup

If you like `Makefile`s, you can run the commands bellow, or check the
`Makefile` for what to run:

```sh
make setup
```

### Starting `client` and `server`

To run all:

```sh
make run
```

To run it on different terminal sessions:

```sh
make run-server
```

```sh
make run-client
```

### Testing

```sh
make test
```
