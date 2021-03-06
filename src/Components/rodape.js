import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Rodape(){
    return(
        <View style={styles.rodape}>
            <Text style={styles.textoRodape}>© 2020 Copyright: Amanda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rodape:{
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252525',
      },
      textoRodape: {
        flexDirection: 'row',
        color: 'white'
      },
    Img:{
        width: 250,
        height: 30
      }
})
export default Rodape