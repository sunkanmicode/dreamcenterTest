import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const TransactionComp = () => {
      const transactionData = [
        {
          icon: <AntDesign name="wallet" size={24} color="#3A3A3A" />,
          name: "XYZ Supermarket",
          transacData: "15 March 2021, 8:30 pm",
          price: "-₦12,000",
          arrorRightIcon: (
            <SimpleLineIcons name="arrow-right" size={12} color="#C7C7C7" />
          ),

          color: "#FFCF87",
        },
        {
          icon: <AntDesign name="wallet" size={24} color="#3A3A3A" />,
          name: "Finnac Pharmacy",
          transacData: "9 March 2021, 10:00 pm",
          price: "-₦8,950",
          arrorRightIcon: (
            <SimpleLineIcons name="arrow-right" size={12} color="#C7C7C7" />
          ),
          color: "#E09FFF",
        },
        {
          icon: <AntDesign name="wallet" size={24} color="#3A3A3A" />,
          name: "XYZ Supermarket",
          transacData: "15 March 2021, 8:30 pm",
          price: "-₦12,000",
          arrorRightIcon: (
            <SimpleLineIcons name="arrow-right" size={12} color="#C7C7C7" />
          ),
          color: "#87F0FF",
        },
        {
          icon: <AntDesign name="wallet" size={24} color="#3A3A3A" />,
          name: "Goodwill Gym",
          transacData: "15 March 2021, 8:30 pm",
          price: "-₦12,000",
          arrorRightIcon: (
            <SimpleLineIcons name="arrow-right" size={12} color="#C7C7C7" />
          ),
          color: "#4960F9",
        },
      ];
  return (
    <>
      <View className=" p-6">
        {/* <Text className="text-[24px] font-[700] font-[MontserratRegular] leading-[29] my-5">
          Recent Transaction
        </Text> */}
        {transactionData.map((item) => (
          <View className="flex-row justify-between items-center my-2">
            <View className="flex-row items-center">
              <View
                className={`w-[48px] h-[48px] bg-[#87F0FF] items-center justify-center rounded-full`}
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </View>
              <View className="mx-2">
                <Text className="text-[18px] font-[400] font-[MontserratRegular] leading-[21]">
                  {item.name}
                </Text>
                <Text className="text-[12px] font-[400] font-[MontserratRegular] leading-[21]">
                  {item.transacData}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Text className="text-[14px] font-[400] font-[MontserratRegular] leading-[17] mx-2">
                {item.price}
              </Text>
              {item.arrorRightIcon}
            </View>
          </View>
        ))}

        
      </View>
    </>
  );
}

export default TransactionComp