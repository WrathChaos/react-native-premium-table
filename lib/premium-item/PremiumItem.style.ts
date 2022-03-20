import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  iconImageStyle: ImageStyle;
  itemTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  iconImageStyle: {
    width: 13,
    height: 13,
    tintColor: "#fff",
  },
  itemTextStyle: {
    fontSize: 16,
    color: "#fff",
  },
});
