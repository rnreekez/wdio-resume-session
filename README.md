# wdio-resume-session

This plugin will allow an existing sessionID to be used by an instance of webdriverio.

Usage:

`wdio.config.js`

```
exports.config = {
    ...

    plugins: {
        'wdio-resume-session': {
            sessionId: 'cb88f218dcf727bd659762bf1ba766f7'
        }
    },

    ...
}
```