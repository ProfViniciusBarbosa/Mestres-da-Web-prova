import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import perfilUsuario from "../assets/img/leeImg.png";
import marvelLogo from "../assets/img/MARVEL.png";
import menuSuperior from "../assets/img/menuSuperior.png";
import { styles } from "../constants/styles";

export default function TopBarApp() {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    type RootStackParamList = {
        Login: undefined;
        Home: undefined;
        ShowGroups: { groupId: string };
    };

    type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login">;
    const navigation = useNavigation<NavigationProps>();

    return (
        <View>
            {/* Barra de navegação */}
            <Appbar.Header style={styles.appbarHeader}>
                <Appbar.Action
                    icon={() => <Image source={menuSuperior} style={styles.menuIcon} />}
                    onPress={openMenu}
                />

                <Image source={marvelLogo} style={styles.marvelLogo} resizeMode="contain" />
            </Appbar.Header>

            <Modal transparent visible={visible} animationType="fade">
                <TouchableOpacity
                    style={styles.modalBackground}
                    activeOpacity={1}
                    onPress={closeMenu}
                >
                    <View style={styles.menuContainer}>
                        <View style={styles.profileContainer}>
                            <Image source={perfilUsuario} style={styles.profileImage} />
                        </View>
                        <Menu.Item onPress={() => console.log("Perfil")} title="Perfil" titleStyle={styles.menuItem} />
                        <Menu.Item onPress={() => console.log("Configurações")} title="Configurações" titleStyle={styles.menuItem} />
                        <Menu.Item onPress={() => console.log("Notificações")} title="Notificações" titleStyle={styles.menuItem} />
                        <Menu.Item onPress={() => navigation.navigate("Login")} title="Sair" titleStyle={styles.menuItem} />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}
