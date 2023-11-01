import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import VirtualKeyboard from "../helper/VirtualKeyboard";
import { useNavigation } from "@react-navigation/native";

const TransfarScreen = () => {
    const navigation = useNavigation()
  const [code, setCode] = React.useState([]);

  const pinLength = 4;

  const handleOnPress =()=>{
    console.log("click")
  }

 
  return (
    <View className="flex-1 bg-white">
      <LinearGradient
        colors={["#4960F9", "#1937FE"]}
        className="  h-[120px] rounded-bl-[70px]  rounded-br-[70px]"
      >
        <View className=" mt-14 mx-5 flex-row">
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text className="text-white mx-auto">Transfar</Text>
        </View>
      </LinearGradient>
      <View className="mt-[75px]   items-center">
        <Text className="text-[20px] font-[400] font-[MontserratRegular] leading-[24.38px] text-[#2743FE]">
          Enter amount
        </Text>
        <View className="">
          <Text className="text-[30px] font-[700] font-[MontserratRegular] text-[#2743FE]">
            ₦<Text className="text-[#B6BFFF]">0</Text>
          </Text>
        </View>
        <View className="h-0.5 bg-[#DED1EF] w-[224px] my-5" />
        <Text className=" mb-5 text-[18px] font-[400] font-[MontserratRegular] leading-[21px] text-[#2743FE]">
          To
        </Text>
        <View className="flex-row items-center">
          <View className=" w-[34] h-[34]">
            <Image
              source={require("../../assets/images/person1.png")}
              style={{
                width: "100%",
                height: "100%",
                //   borderRadius: 20,
              }}
            />
          </View>
          <View className="mx-3">
            <Text className="text-[16px] font-[400] font-[MontserratRegular] leading-[19px] text-[#3A3A3A]">
              Jane Doe
            </Text>
          </View>
        </View>
      </View>
      <View className="items-center mt-10">
        <VirtualKeyboard
          pinLength={pinLength}
          code={code}
          onPress={handleOnPress}
        />
      </View>
      <TouchableOpacity
        className=" items-center mt-7"
        onPress={() => {
          navigation.navigate("BalanceScreen");
        }}
      >
        <Text className="text-[#4960F9]">Click here</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TransfarScreen