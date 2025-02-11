import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Alert, Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import surfistaPrateado from "../assets/img/surfistaPrateado.png";
import despertarFera from "../assets/img/DespertarDaFera.png";
import thorHQ from "../assets/img/ThorHQ.png";
import thanosHQ from "../assets/img/ThanosHQ.png";
import COR from "../constants/COR";
import stanLee from "../assets/img/leeImg.png";
import criador2 from "../assets/img/outroAutor.png";
import { styles } from "../constants/styles";
import { scaleFont } from "../utils/responsive";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const images = [
    { uri: surfistaPrateado, text: "Parábola", stars: 5, resume: "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado.", AllContent: [stanLee, criador2] },
    { uri: despertarFera, text: "Wolverine - Origem", stars: 4, resume: "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002.", AllContent: [stanLee] },
    { uri: thorHQ, text: "Thor - Vikings", stars: 3.5, resume: "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! ", AllContent: [criador2] },
    { uri: thanosHQ, text: "Em Busca do Poder", stars: 4.5, resume: "Para satisfazer os desejos de sua amada Morte e provar o seu amor, Thanos vai em busca das 6 joias do infinito a fim de matar metade da humanidade.", AllContent: [stanLee, criador2] }
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
    const navigation = useNavigation<NavigationProps>();
    const flatListRef = useRef<FlatList<ImageType>>(null);
    let currentIndex = 0;


    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.containerScreen}>
            <Text style={styles.textTitle}>Top 10 - HQs Populares</Text>
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
                                Criador:
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
                    HQs
                </Text>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("ShowGroups", { groupId: "003" })}>
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
                    <Image source={thanosHQ} style={styles.imgBottom} />
                    <Text style={[styles.InfoHeroText, { textAlign: "center", paddingTop: scaleFont(10) }]}>
                        Thor
                    </Text>
                </View>
                <View>
                    <Image source={despertarFera} style={styles.imgBottom} />
                    <Text style={[styles.InfoHeroText, { textAlign: "center", paddingTop: scaleFont(10) }]}>
                        Guerra Infinita
                    </Text>
                </View>

            </View>
        </View>
    );
}