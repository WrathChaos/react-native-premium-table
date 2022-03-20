import { ViewStyle, ImageStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  container: ViewStyle;
  headerStyle: ViewStyle;
  headerGlueStyle: ViewStyle;
  colTitleTextStyle: TextStyle;
  listStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginLeft: 24,
  },
  headerStyle: {
    marginTop: 12,
  },
  headerGlueStyle: {
    height: 20,
  },
  colTitleTextStyle: {
    color: "#fff",
    fontWeight: "bold",
  },
  listStyle: {
    marginTop: 16,
  },
});
