# current-android-app-version
> Get the current version of an Android app


## Install

```
$ npm install current-android-app-version
```


## Usage

```js
const currentAndroidAppVersion = require('current-android-app-version');

currentAndroidAppVersion('bestande.bestande')
.then(version => {
  // => '2.16.2'
})
.catch(err => {
  // => {message: 'Could not find app'}
})
```


## API

### currentAndroidAppVersion(input)

#### input

Type: `string`

The Google Play ID. [How do I find the Google Play ID?](https://support.bitly.com/hc/en-us/articles/115000397112-What-is-a-Google-Play-ID-How-do-I-find-it-)

## See also

- [current-ios-app-version](https://github.com/JonnyBurger/current-ios-app-version): Get current iOS app version from App Store


## License

MIT © [Jonny Burger](http://jonny.io)
