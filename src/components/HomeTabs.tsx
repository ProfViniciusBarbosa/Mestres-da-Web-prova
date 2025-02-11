import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import COR from "../constants/COR";
import { styles } from "../constants/styles";
import CartoonsScreen from "../screens/CartoonsScreen";
import CharactersScreen from "../screens/CharacterScreen";
import MovieScreen from "../screens/MovieScreen";
import TopBarApp from "./TopBar";

export default function HomeTabs() {

    const [screen, setScreen] = useState("Home");

    // Conteúdo de cada tela
    const renderScreen = () => {
        switch (screen) {
            case "Home":
                return <CharactersScreen />
                    ;
            case "Profile":
                return <MovieScreen />
            case "Settings":
                return <CartoonsScreen />
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <TopBarApp />
            <View style={styles.containerHome}>

                <View style={styles.sidebarHome}>

                    <TouchableOpacity style={[styles.menuItemHome, screen == "Home" ? { opacity: 1 } : { opacity: 0.3 }]} onPress={() => setScreen("Home")}>
                        <LinearGradient
                            colors={[COR.vermelho, "transparent"]}
                            start={[1, 1]}
                            end={[0, 1]}
                            locations={[0.5, 0.92]}
                            style={styles.gradienteSetingsHome}
                        >
                            <Text style={styles.menuTextHome}>Personagens</Text>
                        </LinearGradient>
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.menuItemHome, screen == "Profile" ? { opacity: 1 } : { opacity: 0.3 }]} onPress={() => setScreen("Profile")}>
                        <LinearGradient
                            colors={[COR.vermelho, "transparent"]}
                            start={[1, 1]}
                            end={[0, 1]}
                            locations={[0.5, 0.92]}
                            style={styles.gradienteSetingsHome}
                        >
                            <Text style={styles.menuTextHome}>Filmes</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuItemHome, screen == "Settings" ? { opacity: 1 } : { opacity: 0.3 }]} onPress={() => setScreen("Settings")}>
                        <LinearGradient
                            colors={[COR.vermelho, "transparent"]}
                            start={[1, 1]}
                            end={[0, 1]}
                            locations={[0.5, 0.92]}
                            style={styles.gradienteSetingsHome}
                        >
                            <Text style={styles.menuTextHome}>Quadrinhos</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainScreenHome}>{renderScreen()}</View>
            </View>
        </View>
    );
}
