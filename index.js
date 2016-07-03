import React from 'react'
import { Alert, Linking } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import apisauce from 'apisauce'

const createAPI = (baseURL = 'https://itunes.apple.com/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    timeout: 10000
  })

  return {
    getLatest: (bundleId) => api.get('lookup', {bundleId})
  }
}

const performCheck = () => {
  let updateIsAvailable = false
  const api = createAPI()
  const bundleId = 'com.fandor.movies' // TODO: put this back DeviceInfo.getBundleId()
  //

  // Call API
  return api.getLatest(bundleId).then(response => {
    let latestInfo = null
    // Did we get our exact result?
    if (response.ok && response.data.resultCount === 1) {
      latestInfo = response.data.results[0]
      // check for version difference
      updateIsAvailable = latestInfo.version !== DeviceInfo.getVersion()
    }

    return {updateIsAvailable, ...latestInfo}
  })
}

const promptUser = () => {
  performCheck().then(sirenResult => {
    console.log('sirenResult', sirenResult)
    if (sirenResult.updateIsAvailable) {
      const itunesURL = `https://itunes.apple.com/app/id${sirenResult.trackId}`
      Linking.openURL(itunesURL)
    }
  })
}

export default {
  performCheck,
  promptUser
}

