import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  iconImageStyle: ImageStyle;
  itemTextStyle: TextStyle;
  checkCircleStyle: ViewStyle;
  lockCircleStyle: ViewStyle;
  nameTextContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: 8,
  },
  iconImageStyle: {
    width: 13,
    height: 13,
    tintColor: "#fff",
  },
  itemTextStyle: {
    fontSize: 16,
    color: "#fff",
  },
  checkCircleStyle: {
    width: 25,
    height: 25,
    marginTop: 16,
    borderRadius: 25,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0288fa",
  },
  lockCircleStyle: {
    width: 25,
    height: 25,
    marginTop: 16,
    borderRadius: 25,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fe2951",
  },
  nameTextContainer: {
    bottom: 3,
    justifyContent: "flex-end",
  },
});
