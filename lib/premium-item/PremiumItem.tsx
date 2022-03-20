import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  Alert,
} from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
/**
 * ? Local Imports
 */
import styles from "./PremiumItem.style";
import { Item } from "../PremiumTable";

import CheckImg from "./../local-assets/check.png";
import LockImg from "./../local-assets/lock.png";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IPremiumItemProps {
  style?: CustomStyleProp;
  checkImageSource?: ImageSourcePropType;
  lockImageSource?: ImageSourcePropType;
  data: Item;
}

const PremiumItem: React.FC<IPremiumItemProps> = ({
  style,
  data,
  checkImageSource = CheckImg,
  lockImageSource = LockImg,
}) => {
  const { name, isBasic, isPremium } = data;

  const renderCheckCircle = () => (
    <Col size={1.5}>
      <View
        style={{
          width: 25,
          height: 25,
          marginTop: 16,
          borderRadius: 25,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0288fa",
        }}
      >
        <Image source={checkImageSource} style={styles.iconImageStyle} />
      </View>
    </Col>
  );

  const renderLockCircle = () => (
    <Col size={1.5}>
      <View
        style={{
          width: 25,
          height: 25,
          marginTop: 16,
          borderRadius: 25,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fe2951",
        }}
      >
        <Image source={lockImageSource} style={styles.iconImageStyle} />
      </View>
    </Col>
  );

  const renderBasicCircle = () =>
    isBasic ? renderCheckCircle() : renderLockCircle();

  const renderPremiumCricle = () =>
    isPremium ? renderCheckCircle() : renderLockCircle();

  return (
    <Grid>
      <Row style={{ height: 45 }}>
        <Col
          size={3}
          style={{
            bottom: 5,
            justifyContent: "flex-end",
          }}
        >
          <Text style={styles.itemTextStyle}>{name}</Text>
        </Col>
        {renderBasicCircle()}
        {renderPremiumCricle()}
      </Row>
    </Grid>
  );
};

export default PremiumItem;
