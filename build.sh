#!/bin/sh
cd $TRAVIS_BUILD_DIR

# install build dependecies
npm uninstall -g angular-cli
npm clear cache --force
npm install -g @angular/cli --save
npm install -g cordova ionic
#npm install ionic
#npm install @ionic/app-scripts@latest
#npm install ionic-angular@latest
#npm install @angular/core@v5-lts
#npm install @angular/forms@v5-lts
#npm install @angular/platform-browser@v5-lts
#npm install @angular/platform-browser-dynamic@v5-lts
#npm install rxjs@latest

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
