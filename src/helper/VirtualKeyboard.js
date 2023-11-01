import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "del"];
const dialPadSize = width * .2;
const _spacing = 20;
const dialPadTextSize = dialPadSize * 0.4;

// console.log(dialPadSize);

// const bg = linear - gradient("169deg, #4960F9 -13.13%, #1937FE 113.4%");

const VirtualKeyboard = ({ onPress, code, pinLength }) => {
  return (
    <>
      <View>
        <FlatList
          data={dialPad}
          numColumns={3}
          keyExtractor={(_, index) => index.toString()}
          columnWrapperStyle={{ gap: 10 }}
          contentContainerStyle={{ gap: _spacing }}
          style={{ flexGrow: 0 }}
          renderItem={({ item }) => (
            <TouchableOpacity className="">
              <View
                style={{
                  width: 101,
                  height: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: item == "del" ? "#1937FE" : "#F5F6FA",
                  borderRadius: 18,
                }}
              >
                {item === "del" ? (
                  <View>
                    <AntDesign
                      name="arrowright"
                      size={dialPadTextSize}
                      color="#FFFFFF"
                    />
                  </View>
                ) : (
                  <Text className="text-[25px] font-[700]  leading-[33px] text-[#2743FD]">
                    {item}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default VirtualKeyboard;
