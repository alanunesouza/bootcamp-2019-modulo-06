import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import AsyncStorage from "@react-native-community/async-storage";

const reactotron = Reactotron.configure({ name: "MyApp" })
  .useReactNative()
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .connect();
