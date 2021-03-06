import React from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import Rodape from '../../Components/rodape';

const testeUsuario = {
    email: "teste@teste.com",
    senha: "teste"
}

function Login({ navigation }) {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    function autenticar() {
        if (testeUsuario.email === email && testeUsuario.senha === senha) {
            navigation.navigate("Home");
        } else {
            alert('LOGIN INVÁLIDO')
        }
    }

    return (
        <View>
            <View>
                <StatusBar color="auto" />
                <SafeAreaView style={{ justifyContent: "center", flexDirection: 'row', backgroundColor: '#252525', height: 85, }}>
                    <TouchableOpacity
                        style={styles.Nav}
                        title='Ir para sobre' onPress={() => navigation.navigate('Home')}
                    ><Text style={{ color: 'white' }}>Home</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Nav}
                        title='Ir para sobre' onPress={() => navigation.navigate('Produtos')}
                    ><Text style={{ color: 'white' }}>Produtos</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Nav}
                        title='Ir para sobre' onPress={() => navigation.navigate('Login')}
                    ><Text style={{ color: 'white' }}>Login</Text></TouchableOpacity>
                </SafeAreaView>
            </View>
            <View style={styles.container, {backgroundColor: '#2C2C2C', height: 700}}>
                <StatusBar style="auto" />
                <View style={styles.corpo}>
                    <Text style={styles.text}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email:"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha:"
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                    <TouchableOpacity style={styles.btn} onPress={autenticar}>
                        <Text style={styles.textBtn}>Enviar</Text>
                    </TouchableOpacity>
                    <View style={styles.Rodape}>
                        <Rodape />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    corpo:{
        marginTop:'16%',
        alignItems: 'center',
        width: '100%',
        height: 300,
    },
    input:{
        width: 220,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 30,
    },
    text:{
        marginTop: 50,
        marginBottom: 20,
        fontSize: 40,
        color: 'white'
    },
    btn:{
        borderWidth: 1,
        width: 100,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    textBtn:{
        fontSize: 20,
        color: '#252525'
    },
    Nav:{
        paddingTop: 20,
        marginLeft: 15,
        backgroundColor: '#252525',
        justifyContent: 'center'
    },
    Rodape:{
        width: '100%',
        marginTop: 160
    }
})


export default Login;