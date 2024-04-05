import browser from 'webextension-polyfill'

console.log('Welcome to Hey Bro Studio! via Background!')

browser.runtime.onInstalled.addListener(() => {
  console.log('Hey Bro Studio Extension installed!')
})
