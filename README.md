![React Native Siren](https://raw.githubusercontent.com/GantMan/react-native-siren/master/_art/siren-horizontal.png)

The React Native port of the popular [Siren](https://github.com/ArtSabintsev/Siren) / [Harpy](https://github.com/ArtSabintsev/Harpy) Pod and eventually [Gradle](https://github.com/eggheadgames/Siren)

## Install
```
npm install react-native-siren --save
react-native link
```

## Usage
```javascript
import Siren from 'react-native-siren'

...

Siren.promptUser()
```
#### TADAAAA!
![update](http://i.imgur.com/PKreDAS.png)

## Can't I just use [CodePush](https://github.com/Microsoft/code-push)?
For most things yes, and you should.  Sometimes there are limitations to `code-push`, and you're just stuck shipping a new version, because the change is significant.  When code-push fails, siren will save the day.

One goal of this repo is to eventually work with code-push versions along side actual version changes.
