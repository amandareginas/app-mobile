import React from 'react';
import { View, Text, Image, ScrollView, FlatList, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Rodape from '../../Components/rodape';

const DATA = [
    {
        id: '1',
        produto: 'Geladeira',
        preco: 'R$ 1000.00',
        imagem: require('../../../assets/geladeira.jpg')

    },
    {
        id: '2',
        produto: 'Fogão',
        preco: 'R$ 700.99',
        imagem: require('../../../assets/fogao.png')

    },
    {
        id: '3',
        produto: 'Lavadora de Roupas',
        preco: 'R$ 1700.00',
        imagem: require('../../../assets/lavar.jpg')

    },
    {
        id: '4',
        produto: 'Lava-louças',
        preco: 'R$ 2600.00',
        imagem: require('../../../assets/louça.png')
    }
]

function Produtos(props) {
    const { navigation } = props
    return (
        <View>
            <View>
                <SafeAreaView style={{ justifyContent: "center", flexDirection: 'row', alignItems: 'center', paddingTop: 20, backgroundColor: '#252525', height: 85, }}>
                    <TouchableOpacity
                        style={styles.Nav}
                        title='Home' onPress={() => navigation.navigate('Home')}
                    ><Text style={{ color: 'white' }}>Home</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Nav}
                        title='Produtos' onPress={() => navigation.navigate('Produtos')}
                    ><Text style={{ color: 'white' }}>Produtos</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Nav}
                        title='Login' onPress={() => navigation.navigate('Login')}
                    ><Text style={{ color: 'white' }}>Login</Text></TouchableOpacity>
                </SafeAreaView>
            </View>
            <ScrollView>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={styles.corpo}>
                            <Image style={styles.img} source={item.imagem} />
                            <Text>{item.produto} | {item.preco} </Text>
                        </View>
                    }
                />
                <Rodape />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    corpo: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 9
    },
    Nav: {
        marginLeft: 15,
        backgroundColor: '#252525',
        justifyContent: 'center'
    },
    img: {
        width: 100,
        height: 100,
    }
})
export default Produtos