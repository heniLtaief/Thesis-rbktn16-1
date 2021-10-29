import "react-native-gesture-handler";
import { AppRegistry, Platform } from "react-native";
import { registerRootComponent } from "expo";
import { name as appName } from "./app.json";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);