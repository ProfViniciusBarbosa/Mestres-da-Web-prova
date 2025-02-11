import React, { useState, useRef, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity,
    BackHandler,
    Alert,
} from "react-native";
import olhoAberto from "../assets/img/olho-2.png";
import olhoFechado from "../assets/img/olho.png";
import fundoAvengers from "../assets/img/fundoAvengers.jpg";
import marvelLogo from "../assets/img/MARVEL.png";
import COR from "../constants/COR";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "../constants/styles";

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    ShowGroups:undefined;
  };
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function LoginScreen() {
    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");
    const [saveLogin, setSaveLogin] = useState(false);
    const [hidePass, setHidePass] = useState(true);
    const [Errou, setErrou] = useState(false);

    const refInput = useRef<TextInput>(null);
    const olho = useRef<TextInput>(null);
    const navigation = useNavigation<NavigationProps>();

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Ei!", "Você realmente deseja sair do app?", [
                { text: "Não", onPress: () => null, style: "cancel" },
                { text: "Sim", onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const BtnLogin = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.keyboardView}>
                <View style={styles.header}>
                    <Image source={marvelLogo} style={styles.logo} />

                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>Bem-vindo!</Text>
                        <Text style={styles.loginText}>Fazer Login</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            onSubmitEditing={() => refInput.current?.focus()}
                            returnKeyType="next"
                            placeholder="E-mail"
                            placeholderTextColor={Errou ? COR.vermelho : COR.cinza}
                            autoComplete="email"
                            maxLength={40}
                            onChangeText={setEmailLogin}
                            value={emailLogin}
                            style={[styles.input, { color: Errou ? COR.vermelho : COR.preto }]}
                        />
                    </View>

                    <View style={styles.passwordContainer}>
                        <TextInput
                            ref={refInput}
                            returnKeyType="next"
                            placeholder="Senha"
                            placeholderTextColor={Errou ? COR.vermelho : COR.cinza}
                            autoComplete="password"
                            maxLength={30}
                            onChangeText={setSenhaLogin}
                            secureTextEntry={hidePass}
                            value={senhaLogin}
                            style={[
                                styles.passwordInput,
                                { color: Errou ? COR.vermelho : COR.preto },
                            ]}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setHidePass(!hidePass)}
                            ref={olho}
                        >
                            <Image
                                source={hidePass ? olhoAberto : olhoFechado}
                                style={styles.eyeImage}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={BtnLogin} style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>

                    <View style={styles.checkboxContainer}>
                        <View style={styles.checkboxRow}>
                            <Checkbox
                                value={saveLogin}
                                onValueChange={() => setSaveLogin(!saveLogin)}
                                color={saveLogin ? COR.vermelho : undefined}
                                style={styles.checkbox}
                            />
                            <Text style={styles.checkboxText}>
                                Salvar dados de Login e entrar automaticamente
                            </Text>
                        </View>
                        <View style={styles.registerContainer}>
                            <Text style={styles.registerText}>É novo aqui? </Text>
                            <TouchableOpacity>
                                <Text style={styles.registerButtonText}>Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Image source={fundoAvengers} style={styles.backgroundImage} />

                <LinearGradient
                    colors={[COR.preto, "transparent"]}
                    start={[0, 0]}
                    end={[0, 1]}
                    style={styles.gradient}
                />
            </KeyboardAvoidingView>
        </View>
    );
}
