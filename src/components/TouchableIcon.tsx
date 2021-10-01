import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../contexts/contextAuth/AuthContext';

interface Props {
  color: string;
  nameIcon: string;
}
export const TouchableIcon = ({color, nameIcon}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(nameIcon)}>
      <Icon name={nameIcon} size={80} color={color} />
    </TouchableOpacity>
  );
};
