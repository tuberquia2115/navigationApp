import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//import { StackScreenProps } from '@react-navigation/stack'
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles, colors} from '../theme/appTheme';

//interface Props extends StackScreenProps<any, any> { }

interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{marginLeft: 10}}>
          <Icon name="menu-outline" size={30} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{textAlign: 'center'}}>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{...styles.btnLarge, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'pedro',
            })
          }>
          <Text style={styles.btnLargeText}>Pedro</Text>
          <Text>
            <Icon name="body-outline" color='white' size={30} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btnLarge, backgroundColor: '#FF6427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'María',
            })
          }>
          <Text style={styles.btnLargeText}>María</Text>
          <Text>
            <Icon name="woman-outline" color='white' size={30} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
