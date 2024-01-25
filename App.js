import { Pressable, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState();
  const [toDos, setToDos] = useState([]);

  return (
    <View className="flex bg-gradient-to-br py-12 px-6 bg-orange-900 justify-center items-center h-screen grow">
      <View className="w-full grow">
        <Text className="text-2xl font-bold text-orange-500 mb-6">To-Dos</Text>
        <View className="mb-4 flex">
          {toDos.map((todo) => (
            <LinearGradient
              key={todo}
              className="flex grow shadow-xl rounded-xl mb-4 p-4"
              colors={["rgba(255,255,255,0.2)", "rgba(255,255,255,0.05)"]}
            >
              <Text className="text-white font-semibold">{todo}</Text>
            </LinearGradient>
          ))}
        </View>
      </View>
      <View className="w-full">
        <LinearGradient
          className="mb-4 flex grow shadow-xl rounded-xl p-4"
          colors={["rgba(255,255,255,0.4)", "rgba(255,255,255,0.2)"]}
        >
          <TextInput
            placeholder="Name your to-do"
            className="w-full"
            placeholderTextColor={"rgba(255, 255, 255, 1)"}
            onChangeText={(text) => setInput(text)}
            value={input}
          />
        </LinearGradient>
        <Pressable
          className="border-2 border-orange-500 shadow-xl p-4 rounded-xl text-white"
          onPress={() => {
            setToDos((prev) => [...prev, input]);
            setInput("");
          }}
        >
          <Text className="text-orange-500 text-center font-semibold">
            Add To-Do
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
