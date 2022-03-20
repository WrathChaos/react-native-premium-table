import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import PremiumTable from "./lib/PremiumTable";

const mockData = [
  {
    name: "Data Sync",
    isBasic: true,
    isPremium: true,
  },
  {
    name: "Offline Usage",
    isBasic: true,
    isPremium: true,
  },
  {
    name: "Share with Friends",
    isBasic: true,
    isPremium: true,
  },
  {
    name: "Unlimited Items",
    isBasic: false,
    isPremium: true,
  },
  {
    name: "Unlimited Lists",
    isBasic: false,
    isPremium: true,
  },
  {
    name: "Insight",
    isBasic: false,
    isPremium: true,
  },
  {
    name: "Custom App Icons",
    isBasic: false,
    isPremium: true,
  },
  {
    name: "Historical Access",
    isBasic: false,
    isPremium: true,
  },
  {
    name: "Priority Support",
    isBasic: false,
    isPremium: true,
  },
];

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2c2c2e" }}>
      <View style={{ marginTop: 16, alignSelf: "center" }}>
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
          Unlock Premium
        </Text>
      </View>
      <PremiumTable style={{ marginTop: 24 }} data={mockData} />
    </SafeAreaView>
  );
};

export default App;
