import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import TransactionComp from "../components/TransactionComp";
import { useNavigation } from "@react-navigation/native";

const BalanceScreen = () => {
    const navigation = useNavigation();

  const [categoriesIndex, setCategoriesIndex] = React.useState(0);

  const categories = [
    {
      name: "House Balance",
      price: " ₦45,000.00",
      onPress: () => {},
    },
    {
      name: "School Balance",
      price: " ₦33,000.00",
      onPress: () => {},
    },
    {
      name: "Bank Balance",
      price: " ₦67,000.00",
      onPress: () => {},
    },
    {
      name: "friend Balance",
      price: " ₦45,000.00",
      onPress: () => {},
    },
   
  ];



  return (
    <View className=" flex-1 bg-white">
      <LinearGradient
        colors={["#4960F9", "#1937FE"]}
        className="  h-[275px] rounded-bl-[70px]  rounded-br-[70px]"
      >
        <View className=" mt-14 p-6">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text className="text-[24px] font-[700] font-[MontserratRegular] leading-[29] text-white w-[252]">
            You can check your balances here,
          </Text>
        </View>
      </LinearGradient>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-6 p-6"
        >
          {categories.map((item, index) => (
            <TouchableOpacity
              className="w-[209px] h-[132px] rounded-[40px] items-center justify-center border border-[#DED1EF] mr-4"
              onPress={() => {
                setCategoriesIndex(index);
              }}
            >
              {categoriesIndex == index ? (
                <LinearGradient
                  colors={["#E100FF", "#2B47FC", "#40D3F2"]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  className="w-[209px] h-[132px]  rounded-[40px] items-center justify-center"
                >
                  <View className="">
                    <Text className="text-[18px] font-[700] font-[MontserratRegular] leading-[21] text-[#fff] mb-7">
                      {item.name}
                    </Text>
                    <Text className="text-[24px] font-[700] font-[MontserratRegular] text-[#fff] leading-[29]">
                      {item.price}
                    </Text>
                  </View>
                </LinearGradient>
              ) : (
                <>
                  <Text className="text-[18px] font-[700] font-[MontserratRegular] leading-[21] mb-7">
                    {item.name}
                  </Text>
                  <Text className="text-[24px] font-[700] font-[MontserratRegular] leading-[29]">
                    {item.price}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Text className="text-[24px] font-[700] font-[MontserratRegular] leading-[29]  p-6">
        Recent Transaction
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} className="h-full pb-10">
        <TransactionComp />
      </ScrollView>
    </View>
  );
};

export default BalanceScreen;


