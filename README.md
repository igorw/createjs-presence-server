# CreateJS Presence Server

Sample implementation of a presence server for createjs.

## Install

    npm install

## Run

    node app.js

## Peudo-spec

### Get presence status

    GET /presence
    > id=foo
    < 1
    # or
    < 0

### Announce presence

    POST /presence
    > id=foo
    > state=1

### Announce leave

    POST /presence
    > id=foo
    > state=0

## License

MIT, see LICENSE.
