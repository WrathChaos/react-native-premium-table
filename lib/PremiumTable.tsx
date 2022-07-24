import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import PremiumItem from "./premium-item/PremiumItem";
/**
 * ? Local Imports
 */
import styles from "./PremiumTable.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTitleStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface Item {
  name: string;
  isBasic: boolean;
  isPremium: boolean;
}

interface IPremiumTableProps {
  style?: CustomStyleProp;
  headerStyle?: CustomStyleProp;
  titleTextStyle?: CustomTitleStyleProp;
  itemTextStyle?: CustomTitleStyleProp;
  data: Item[];
  basicText?: string;
  premiumText?: string;
}

const PremiumTable: React.FC<IPremiumTableProps> = ({
  style,
  data,
  basicText = "Basic",
  premiumText = "Premium",
  titleTextStyle,
  itemTextStyle,
  headerStyle,
  ...rest
}) => {
  const renderHeader = () => (
    <Grid style={[styles.headerStyle, headerStyle]}>
      <Row style={styles.headerGlueStyle}>
        <Col size={2.7} />
        <Col>
          <Text style={[styles.colTitleTextStyle, titleTextStyle]}>
            {basicText}
          </Text>
        </Col>
        <Col>
          <Text style={[styles.colTitleTextStyle, titleTextStyle]}>
            {premiumText}
          </Text>
        </Col>
      </Row>
    </Grid>
  );

  const renderList = () => (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <PremiumItem data={item} itemTextStyle={itemTextStyle} {...rest} />
      )}
    />
  );

  return (
    <View style={[styles.container, style]}>
      {renderHeader()}
      {renderList()}
    </View>
  );
};

export default PremiumTable;
