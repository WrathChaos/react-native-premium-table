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
  data: Item[];
}

const PremiumTable: React.FC<IPremiumTableProps> = ({ style, data }) => {
  return (
    <View style={[styles.container, style]}>
      <Grid style={{ marginTop: 12 }}>
        <Row style={{ height: 20 }}>
          <Col size={2.5} />
          <Col>
            <Text style={styles.colTitleTextStyle}>Basic</Text>
          </Col>
          <Col>
            <Text style={styles.colTitleTextStyle}>Premium</Text>
          </Col>
        </Row>
      </Grid>
      <FlatList
        data={data}
        style={styles.listStyle}
        renderItem={({ item }) => <PremiumItem data={item} />}
      />
    </View>
  );
};

export default PremiumTable;
