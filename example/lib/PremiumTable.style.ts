import { ViewStyle, ImageStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  container: ViewStyle;
  iconImageStyle: ImageStyle;
  colTitleTextStyle: TextStyle;
  itemTextStyle: TextStyle;
  listStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginLeft: 24,
  },
  iconImageStyle: {
    width: 13,
    height: 13,
    tintColor: "#fff",
  },
  colTitleTextStyle: {
    color: "#fff",
    fontWeight: "bold",
  },
  itemTextStyle: {
    color: "#fff",
  },
  listStyle: {
    marginTop: 16,
  },
});
