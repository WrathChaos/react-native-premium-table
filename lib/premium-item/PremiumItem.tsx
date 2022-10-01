import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
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
type CustomTitleStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface IPremiumItemProps {
  style?: CustomStyleProp;
  checkCircleStyle?: CustomStyleProp;
  iconImageStyle?: CustomImageStyleProp;
  checkImageSource?: ImageSourcePropType;
  itemTextStyle?: CustomTitleStyleProp;
  lockImageSource?: ImageSourcePropType;
  data: Item;
  numberOfLines?: number;
  adjustsFontSizeToFit?: boolean;
}

const PremiumItem: React.FC<IPremiumItemProps> = ({
  style,
  data,
  checkImageSource = CheckImg,
  lockImageSource = LockImg,
  checkCircleStyle,
  itemTextStyle,
  iconImageStyle,
  numberOfLines = 2,
  adjustsFontSizeToFit = true,
}) => {
  const { name, isBasic, isPremium, children } = data;

  const renderCheckCircle = () => (
    <Col size={1.5}>
      <View style={[styles.checkCircleStyle, checkCircleStyle]}>
        <Image
          source={checkImageSource}
          style={[styles.iconImageStyle, iconImageStyle]}
        />
      </View>
    </Col>
  );

  const renderLockCircle = () => (
    <Col size={1.5}>
      <View style={styles.lockCircleStyle}>
        <Image
          source={lockImageSource}
          style={[styles.iconImageStyle, iconImageStyle]}
        />
      </View>
    </Col>
  );

  const renderBasicCircle = () =>
    isBasic ? renderCheckCircle() : renderLockCircle();

  const renderPremiumCircle = () =>
    isPremium ? renderCheckCircle() : renderLockCircle();

  return (
    <Grid>
      <Row style={[styles.container, style]}>
        <Col size={3} style={styles.nameTextContainer}>
          <Text
            adjustsFontSizeToFit={adjustsFontSizeToFit}
            numberOfLines={numberOfLines}
            style={[styles.itemTextStyle, itemTextStyle]}
          >
            {name}
          </Text>
          {children}
        </Col>
        {renderBasicCircle()}
        {renderPremiumCircle()}
      </Row>
    </Grid>
  );
};

export default PremiumItem;
