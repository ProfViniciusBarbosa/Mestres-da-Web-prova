import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Alert, Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import capitaoAmerica from "../assets/img/CapitaoAmerica.png";
import Thanos from "../assets/img/ThanosLite.png";
import thorFilme from "../assets/img/ThorFilme.png";
import guerraInfinita from "../assets/img/guerrainfinita.png";
import homemDeFerro2 from "../assets/img/homemDeFerro2Lite.png";
import Hulk from "../assets/img/hulk.png";
import MiranhaLite from "../assets/img/miranha.png";
import WandaLite from "../assets/img/wandaLite.png";
import COR from "../constants/COR";
import { styles } from "../constants/styles";
import { scaleFont } from "../utils/responsive";

const { width } = Dimensions.get("window");

const images = [
    { uri: guerraInfinita, text: "Guerra Infinita", stars: 5, resume: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos.", AllContent: [WandaLite, MiranhaLite, Thanos, Hulk] },
    { uri: capitaoAmerica, text: "Capitão América", stars: 4, resume: "Após ser Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.", AllContent: [capitaoAmerica] },
    { uri: thorFilme, text: "Thor", stars: 3.5, resume: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ", AllContent: [thorFilme] },
    { uri: homemDeFerro2, text: "Homem de Ferro 2", stars: 4.5, resume: "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro....", AllContent: [homemDeFerro2] }
];
type ImageType = {
    uri: string;
    text: string;
    stars: number;
    resume: string;
    AllContent: string[];
};
type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    ShowGroups: { groupId: string };
  };
  
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function ProfileScreen() {
    const flatListRef = useRef<FlatList<ImageType>>(null);
    let currentIndex = 0;
    const navigation = useNavigation<NavigationProps>();

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.containerScreen}>
            <Text style={styles.textTitle}>Top 10 - Filmes Populares</Text>
            <FlatList
                ref={flatListRef}
                data={images}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                snapToInterval={width * scaleFont(0.90)}
                snapToAlignment="start"
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.uri} style={styles.image} />
                        <Image source={images[index == images.length - 1 ? 0 : index + 1].uri} style={styles.imageMid} />
                        <Image source={images[index == images.length - 1 ? 1 : index + 1 == images.length - 1 ? 0 : index + 2].uri} style={styles.imageLow} />
                        <LinearGradient
                            colors={[COR.vermelho, "transparent"]}
                            start={[0, 1]}
                            end={[0, 0]}
                            locations={[0.1, 1]}
                            style={styles.gradienteSetings}
                        >
                            <Text style={styles.textBoxText}>{item.text}</Text>
                            <View style={styles.starsView}>
                                <Text style={styles.ratingText}>Avaliação dos fãs</Text>
                                <View style={styles.starsRow}>
                                    {[1, 2, 3, 4, 5].map((star) => {
                                        let iconName = "star-o";
                                        if (star <= Math.floor(item.stars)) {
                                            iconName = "star";
                                        } else if (star === Math.ceil(item.stars) && item.stars % 1 !== 0) {
                                            iconName = "star-half-o";
                                        }
                                        return (
                                            <FontAwesome
                                                key={star}
                                                name={iconName}
                                                size={scaleFont(20)}
                                                color="gold"
                                                style={styles.starIcon}
                                            />
                                        );
                                    })}
                                </View>
                            </View>
                        </LinearGradient>
                        <View style={styles.boxInfo}>
                            <Text style={styles.InfoHeroText}>
                                {item.resume}
                            </Text>
                            <TouchableOpacity onPress={() => Alert.alert("Somente Visual!", `Este botão nào teve função previamente definida, mas seria sobre ${images[index].text}.`)}>
                                <Text style={styles.seeMoreText}>
                                    ver mais
                                </Text>
                            </TouchableOpacity>

                            <Text style={styles.geralBoxText}>
                                Aparições:
                            </Text>
                            <View style={{ flexDirection: "row" }}>
                                {
                                    images[index].AllContent.map((partName, index) => {
                                        return (
                                            <Image key={index} style={styles.imagePart} source={partName} />
                                        )
                                    })
                                }
                            </View>

                        </View>
                    </View>
                )}
            />
            <View style={styles.characterFormat}>
                <Text style={styles.geralBoxText}>
                    Filmes
                </Text>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={()=>navigation.navigate("ShowGroups", { groupId: "002" })}>
                    <Text style={styles.plusFormat}>
                        +
                    </Text>
                    <Text style={styles.geralBoxText}>
                        Ver todos
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.characterFormat}>
                <View>
                    <Image source={thorFilme} style={styles.imgBottom} />
                    <Text style={[styles.InfoHeroText, { textAlign: "center", paddingTop: scaleFont(10) }]}>
                        Thor
                    </Text>
                </View>
                <View>
                    <Image source={guerraInfinita} style={styles.imgBottom} />
                    <Text style={[styles.InfoHeroText, { textAlign: "center", paddingTop: scaleFont(10) }]}>
                        Guerra Infinita
                    </Text>
                </View>

            </View>
        </View>
    );
}