import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Alert, Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import UltronPart from "../assets/img/age-of-ultron.png";
import aranhaHorizontal from "../assets/img/aranhaHorizontal.png";
import CivilPart from "../assets/img/civil-war.png";
import Hulk from "../assets/img/hulk.png";
import hulkHorizontal from "../assets/img/hulkHorizontal.png";
import InfinitWarPart from "../assets/img/infinity-war.png";
import MiranhaLite from "../assets/img/miranha.png";
import Thanos from "../assets/img/ThanosLite.png";
import UltimatePart from "../assets/img/ultimate.png";
import WandaVisionPart from "../assets/img/wanda-vision.png";
import WandaLite from "../assets/img/wandaLite.png";
import COR from "../constants/COR";
import { styles } from "../constants/styles";
import { scaleFont } from "../utils/responsive";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const { width } = Dimensions.get("window");

const images = [
    { uri: WandaLite, text: "Wanda Maximoff", stars: 4, resume: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário.", AllContent: [UltronPart, CivilPart, InfinitWarPart, UltimatePart, WandaVisionPart] },
    { uri: MiranhaLite, text: "Homem Aranha", stars: 4.5, resume: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.", AllContent: [InfinitWarPart, UltimatePart] },
    { uri: Hulk, text: "Hulk", stars: 2.5, resume: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner.", AllContent: [UltronPart, CivilPart, InfinitWarPart, UltimatePart,] },
    { uri: Thanos, text: "Thanos", stars: 5, resume: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.", AllContent: [InfinitWarPart, UltimatePart] }
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

export default function CharacterScreen() {
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
            <Text style={styles.textTitle}>Top 10 - Personagens Populares</Text>
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
                    Personagens
                </Text>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={()=>navigation.navigate("ShowGroups", { groupId: "001" })}>
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
                    <Image source={aranhaHorizontal} style={styles.imgBottom} />
                    <Text style={[styles.InfoHeroText, { textAlign: "center", paddingTop: scaleFont(10) }]}>
                        Homem-Aranha
                    </Text>
                </View>
                <View>
                    <Image source={hulkHorizontal} style={styles.imgBottom} />
                    <Text style={[styles.InfoHeroText, { textAlign: "center", paddingTop: scaleFont(10) }]}>
                        Hulk
                    </Text>
                </View>

            </View>
        </View>
    );
}
