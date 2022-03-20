import React from "react";
import { View, Text, FlatList, StyleProp, ViewStyle } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import PremiumItem from "./premium-item/PremiumItem";
/**
 * ? Local Imports
 */
import styles from "./PremiumTable.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface Item {
  name: string;
  isBasic: boolean;
  isPremium: boolean;
}

interface IPremiumTableProps {
  style?: CustomStyleProp;
  headerStyle: CustomStyleProp;
  data: Item[];
  basicText?: string;
  premiumText?: string;
}

const PremiumTable: React.FC<IPremiumTableProps> = ({
  style,
  data,
  basicText = "Basic",
  premiumText = "Premium",
  headerStyle,
  ...rest
}) => {
  const renderHeader = () => (
    <Grid style={[styles.headerStyle, headerStyle]}>
      <Row style={styles.headerGlueStyle}>
        <Col size={2.7} />
        <Col>
          <Text style={styles.colTitleTextStyle}>{basicText}</Text>
        </Col>
        <Col>
          <Text style={styles.colTitleTextStyle}>{premiumText}</Text>
        </Col>
      </Row>
    </Grid>
  );

  const renderList = () => (
    <FlatList
      data={data}
      style={styles.listStyle}
      renderItem={({ item }) => <PremiumItem data={item} {...rest} />}
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
