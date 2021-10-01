import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };
export const Pagina2Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Atras'
        })

    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>

            <Button title="Ir pagina 3" onPress={() => navigation.navigate('Pagina3Screen')} />
        </View>
    )
}


