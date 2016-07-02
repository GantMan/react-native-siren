import React from 'react'
import { Alert, Linking } from 'react-native'
import DeviceInfo from 'react-native-device-info'

export default class Siren {
  constructor (appID) {
    const bundleId = DeviceInfo.getBundleId()
    const endpoint = `https://itunes.apple.com/lookup?bundleId=${bundleId}`
    const itunes = `https://itunes.apple.com/app/id${appID}`

    // Call API

    // Assure 1 result  `0 < results.length < 2`

    // Access `response.data.results[0].version`

    // check against DeviceInfo.getVersion()

    // prompt user if different

    // User chooses upgrade
    Linking.openURL(itunes)

  }

}
