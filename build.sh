#!/bin/sh
cd $TRAVIS_BUILD_DIR

# install build dependecies
npm cache clear --force
npm install -g cordova ionic
npm install ionic
npm install @ionic/app-scripts@latest
npm install ionic-angular@latest

chmod 777 node_modules

# build Android and iOS packages
ionic cordova platform remove android
ionic cordova platform add android

ionic info
ionic cordova build android --release
# - cordova build ios --device --release

#sign
jarsigner -verbose -sigalg SHA1withRSA -storepass $storepass -keypass $keypass -digestalg SHA1 -keystore dm-shield.keystore ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk dm-shield-key
zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./platforms/android/app/build/outputs/apk/release/app-release-signed.apk

#supply
supply run -j ./platforms/android/gapi.json -p com.github.disparter.dm_shield -b ./platforms/android/app/build/outputs/apk/release/app-release-signed.apk
