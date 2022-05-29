# Large titles on the new React Native architecture
This repository contains 2 "Hello World" React Native apps. One is built with the old React Native architecture and the other is built with the new React Native architecture. The apps are the same. They each consist of 2 screens. The first screen has a button. When you press the button you're taken to the next screen which shows a large title.

## Steps to recreate the problem
1. cd to the `newarch` app
2. Run `npm install` and `RCT_NEW_ARCH_ENABLED=1 pod install`
3. Run `npx react-native run-ios`
4. Press the button on the first screen
5. Notice that the 'World' title shows large correctly
6. Go back using the ios back button in the navigation bar
7. Press the button on the first screen again
8. Notice that the 'World' shows small wrongly.

Repeat the above steps in the oldarch app and you'll see that the 'World' title shows large correctly at both steps 5 and at step 8.
