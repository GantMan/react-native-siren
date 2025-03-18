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

const defaultOptions = {
  title: 'AwesomeApp has a new update!'
}

const versionSpecificRules = [{
  localVersion: '3.0.2',
  forceUpgrade: true,
  title: 'Update your app now',
  message: 'This version contains a bug that might corrupt your data. You must update to be able to use our app.'
}]

Siren.promptUser(defaultOptions, versionSpecificRules)

// or

Siren.performCheck().then(({ updateIsAvailable }) => {
  if (updateIsAvailable) {
    showCustomUpdateModal()
  }
})

```

## Options 

| value             | Description             | default |
| -------------     |-------------            | -----|
|title              | Alert title             | Update Available |
|message            | Alert Message           | There is an updated version available on the App Store. Would you like to upgrade? |
|buttonUpgradeText  | Upgrade Button Text     | Upgrade |
|buttonCancelText   | Cancel Button Text      | Cancel |
|forceUpgrade       | Hide Cancel Button      | false |
|reverseButtons     | Reverse Buttons         | false |


## Version-specific rules

There might be situations where you'd like to specify rules dynamically based on what version the device is currently running.
If so, pass an array as second argument.

| value             | Description |
| -------------     |-------------|
| localVersion      | version currently running on the device |
| title, message..  | same options as specified in the [Options](#options) section | 

## performCheck options
Optional, in some cases it may be necessary to perform a specific check.
The app may only be available in some countries, so you need to make explicit the contry code. 

| value    | Description                                                                                                   | default                                     |
|----------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| bundleId | id that identifies the app (ex: com.apple.mobilesafari)                                                       | DeviceInfo.getBundleId()                    |
| country  | [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) | undefined (the API won't filter by country) |


#### TADAAAA!
![update](http://i.imgur.com/PKreDAS.png)

## Can't I just use [CodePush](https://github.com/Microsoft/code-push)?
For most things yes, and you should.  Sometimes there are limitations to `code-push`, and you're just stuck shipping a new version when the change is significant.  When code-push fails, Siren will help.

One goal of this repo is to eventually work with code-push versions along side actual version changes.
