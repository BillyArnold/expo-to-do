import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex bg-black justify-center items-center h-screen grow">
      <View className="p-8 bg-white shadow-lg rounded-lg">
        <Text className="text-sky-800 font-bold">This is a card</Text>
      </View>

      <View
        className="
        w-full 
        h-40
        fixed 
        bottom-0
        left-0 
        bg-white
        shadow-lg
        rounded-tl-lg 
        rounded-tr-lg
        text-center
        p-6
      "
      >
        <Text className="text-sky-800 font-bold">Drawer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
