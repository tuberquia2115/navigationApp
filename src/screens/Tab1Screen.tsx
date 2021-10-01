import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';

import {styles, colors} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const {top: marginTop} = useSafeAreaInsets();
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop}}>
      <Text style={styles.title}>Iconos </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <TouchableIcon nameIcon="alarm-outline" color={colors.secondary} />
        <TouchableIcon nameIcon="help-buoy" color={colors.primary} />
        <TouchableIcon
          nameIcon="american-football-outline"
          color={colors.secondary}
          
        />
        <TouchableIcon nameIcon="baseball-outline" color={colors.primary} />
        <TouchableIcon nameIcon="bed-outline" color={colors.secondary} />
        <TouchableIcon nameIcon="beer-outline" color={colors.primary} />
        <TouchableIcon nameIcon="easel" color={colors.secondary} />
        <TouchableIcon nameIcon="finger-print" color={colors.primary} />
        <TouchableIcon nameIcon="game-controller" color={colors.secondary} />
        <TouchableIcon nameIcon="heart-half" color={colors.primary} />
      </View>
    </View>
  );
};
