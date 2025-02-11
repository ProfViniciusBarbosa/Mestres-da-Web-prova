import { StackScreenProps } from "@react-navigation/stack";
import { Icon } from '@rneui/themed';
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import amazon from "../assets/img/amazon.png";
import americanas from "../assets/img/americanas.png";
import disney from "../assets/img/disney.png";
import TopBarApp from "../components/TopBar";
import COR from "../constants/COR";
import { styles } from "../constants/styles";
import { scaleFont, scaleHeight, scaleWidth } from "../utils/responsive";

type RootStackParamList = {
    ShowGroups: { groupId: string };
};

type Props = StackScreenProps<RootStackParamList, "ShowGroups">;

const cards = [
    { id: '1', title: 'Homem Aranha', image: require("../assets/img/miranhaVertical.png"), stars: 4.5, resume: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.", aparicoes: ["Homem-Aranha 1", "Homem-Aranha 2", "Homem Aranha 3", "Espetacular Homem-Aranha 1", "Espetacular Homem-Aranha 2", "Capitão-América: Guerra Civil", "Homem-Aranha no AranhaVerso", "Homem-Aranha - Homecoming", "Vingadores - Guerra Infinita", "Vingadores - Ultimato", "Homem-Aranha - Far from home"] },
    { id: '2', title: 'Wanda Maximoff', image: require("../assets/img/wanda.png"), stars: 4, resume: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário.", aparicoes: ["sem dados"] },
    { id: '3', title: 'Thanos', image: require("../assets/img/Thanos.png"), stars: 5, resume: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.", aparicoes: ["sem dados"] },
    { id: '4', title: 'Hulk', image: require("../assets/img/hulk.png"), stars: 2.5, resume: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner.", aparicoes: ["sem dados"] },
    { id: '5', title: 'Homem Aranha', image: require("../assets/img/miranhaVertical.png"), stars: 4.5, resume: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.", aparicoes: ["sem dados"] },
    { id: '6', title: 'Wanda Maximoff', image: require("../assets/img/wanda.png"), stars: 4, resume: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário.", aparicoes: ["sem dados"] },
    { id: '7', title: 'Thanos', image: require("../assets/img/Thanos.png"), stars: 5, resume: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.", aparicoes: ["sem dados"] },
    { id: '8', title: 'Hulk', image: require("../assets/img/hulk.png"), stars: 2.5, resume: "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner.", aparicoes: ["sem dados"] },
];
const cards2 = [
    { id: '1', title: "Guerra Infinita", image: require("../assets/img/infinity-war.png"), stars: 5, resume: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos.", disponivel: [disney] },
    { id: '2', title: "Capitão América", image: require("../assets/img/CapitaoAmerica.png"), stars: 4, resume: "Após ser Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.", disponivel: [disney] },
    { id: '3', title: "Thor", image: require("../assets/img/ThorFilme.png"), stars: 3.5, resume: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ", disponivel: [disney] },
    { id: '4', title: "Homem de Ferro 2", image: require("../assets/img/homemDeFerro2.png"), stars: 4.5, resume: "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro....", disponivel: [disney] },
    { id: '5', title: "Guerra Infinita", image: require("../assets/img/infinity-war.png"), stars: 5, resume: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos.", disponivel: [disney] },
    { id: '6', title: "Capitão América", image: require("../assets/img/CapitaoAmerica.png"), stars: 4, resume: "Após ser Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.", disponivel: [disney] },
    { id: '7', title: "Thor", image: require("../assets/img/ThorFilme.png"), stars: 3.5, resume: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ", disponivel: [disney] },
    { id: '8', title: "Homem de Ferro 2", image: require("../assets/img/homemDeFerro2.png"), stars: 4.5, resume: "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro....", disponivel: [disney] },

];

const cards3 = [
    { id: '1', title: 'Parábola', image: require("../assets/img/surfistaPrateado.png"), stars: 5, resume: "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado.", disponivel: [amazon, americanas] },
    { id: '2', title: 'Wolverine - Origem', image: require("../assets/img/DespertarDaFera.png"), stars: 4, resume: "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002.", disponivel: [amazon, americanas] },
    { id: '3', title: 'Thor - Vikings', image: require("../assets/img/ThorHQ.png"), stars: 3.5, resume: "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite!", disponivel: [amazon] },
    { id: '4', title: 'Em busca do Poder', image: require("../assets/img/ThanosHQ.png"), stars: 4.5, resume: "Para satisfazer os desejos de sua amada Morte e provar o seu amor, Thanos vai em busca das 6 joias do infinito a fim de matar metade da humanidade.", disponivel: [americanas] },
    { id: '5', title: 'Parábola', image: require("../assets/img/surfistaPrateado.png"), stars: 5, resume: "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado.", disponivel: [amazon, americanas] },
    { id: '6', title: 'Wolverine - Origem', image: require("../assets/img/DespertarDaFera.png"), stars: 4, resume: "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002.", disponivel: [amazon, americanas] },
    { id: '7', title: 'Thor - Vikings', image: require("../assets/img/ThorHQ.png"), stars: 3.5, resume: "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite!", disponivel: [amazon] },
    { id: '8', title: 'Em busca do Poder', image: require("../assets/img/ThanosHQ.png"), stars: 4.5, resume: "Para satisfazer os desejos de sua amada Morte e provar o seu amor, Thanos vai em busca das 6 joias do infinito a fim de matar metade da humanidade.", disponivel: [americanas] },
];

interface Card {
    id: string;
    title: string;
    image: any;
    stars: number;
    resume: string;
    aparicoes: string[];
};
interface Card2 {
    id: string;
    title: string;
    image: any;
    stars: number;
    resume: string;
    disponivel: undefined[];
};

const { width, height } = Dimensions.get("window");

export default function ShowGroupsScreen({ navigation, route }: Props) {
    const { groupId } = route.params;
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const [selectedCard, setSelectedCard] = useState<Card | Card2 | null>(null);

    const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (!flatListRef.current) return;

        const contentWidth = event.nativeEvent.contentSize.width;
        const layoutWidth = event.nativeEvent.layoutMeasurement.width;
        const contentOffsetX = event.nativeEvent.contentOffset.x;

        // Verifica se chegou ao final
        if (contentOffsetX + layoutWidth >= contentWidth - 1) {
            flatListRef.current.scrollToIndex({ index: 0, animated: true });
        }
    };

    return (
        <View style={styles.mainScreenHome}>
            <TopBarApp />
            <View style={styles.telaGroups}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back' color={COR.vermelho} size={scaleFont(30)} style={{ paddingRight: scaleFont(10) }} />
                    <Icon name={groupId === "001" ? 'people' : groupId === "002" ? 'local-movies' : 'menu-book'} color={COR.vermelho} size={scaleFont(40)} />
                </TouchableOpacity>
                <Text style={{ fontSize: scaleFont(22), alignSelf: "center", paddingLeft: scaleFont(10), fontWeight: "bold", color: COR.branco, textAlign: "left" }}>
                    {groupId === "001" ? "Personagens" : groupId === "002" ? "Filmes" : "HQs"}
                </Text>
            </View>
            {/* Não coloquei as informações de filtragem e estava sem dados para os filtros, mas deixei o que eu usaria
             <DropDownPicker
            listMode="MODAL"
            open={openFiltro}
            value={qualFiltro}
            items={listaDeles}
            setOpen={setOpenFiltro}
            setValue={setFiltro}
            setItems={setItensFiltro}
            placeholder="Filtrar"
          /> */}

            <View style={{ paddingTop: scaleHeight(20), paddingHorizontal: scaleWidth(4) }}>
                <FlatList
                    ref={flatListRef}
                    data={groupId === "001" ? cards : groupId === "002" ? cards2 : cards3}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={true}
                    keyExtractor={item => item.id}
                    onMomentumScrollEnd={handleScrollEnd}
                    renderItem={({ item }) => {
                        const dataSource = groupId === "001" ? cards : groupId === "002" ? cards2 : cards3;
                        return (
                            <View style={styles.viewCardGroups}>
                                {[0, 1, 2, 3].map(offset => {
                                    const card = dataSource[(currentIndex * 4) + offset];
                                    return card ? (
                                        <View key={card.id} style={styles.viewCardDivisorGroups}>
                                            <Image source={card.image} style={{ width: "100%", height: "100%", resizeMode: "stretch" }} />
                                            <LinearGradient
                                                colors={[COR.vermelho, "transparent"]}
                                                start={[0, 0]}
                                                end={[0, 1]}
                                                locations={[0.1, 1]}
                                                style={styles.gradientCardGroups}
                                            >
                                                <Text style={{ fontSize: scaleFont(16), color: COR.branco, alignSelf: "center", paddingTop: scaleFont(10), fontWeight: "bold" }}>
                                                    {card.title}
                                                </Text>
                                                <Text style={{ fontSize: scaleFont(10), color: COR.branco, paddingHorizontal: scaleWidth(8), paddingTop: scaleFont(5), textAlign: "justify" }}>
                                                    {card.resume}
                                                </Text>
                                                <TouchableOpacity onPress={() => { setSelectedCard(card) }}>
                                                    <Text style={{ fontSize: scaleFont(16), color: COR.branco, alignSelf: "center", paddingTop: scaleFont(2), fontWeight: "bold" }}>
                                                        ver detalhes
                                                    </Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                    ) : null;
                                })}
                            </View>
                        );
                    }}
                />
            </View>
            <Modal
                isVisible={!!selectedCard}
                backdropOpacity={0.7}
                animationIn="slideInDown"
                animationOut="zoomOut"
                onBackdropPress={() => setSelectedCard(null)}
            >
                <View style={{
                    backgroundColor: COR.vermelho,
                    borderRadius: scaleFont(30),
                    height: "80%",
                }}>
                    {selectedCard && (
                        <>
                            <Image source={selectedCard.image} style={{
                                resizeMode: "cover", width: "100%", alignSelf: "center",
                                height: scaleHeight(180),
                                borderRadius: scaleFont(30),
                                marginBottom: scaleHeight(10),
                            }} />
                            <View style={{ height: "56%" }}>
                                <Text style={{ fontSize: scaleFont(22), fontWeight: 'bold', color: COR.branco, marginBottom: scaleHeight(10), paddingHorizontal: scaleWidth(30), }}>{selectedCard.title}</Text>
                                {
                                    groupId != "001" ?
                                        <Text style={{ fontSize: scaleFont(18), color: COR.branco, marginBottom: scaleHeight(10), paddingHorizontal: scaleWidth(30) }}>
                                            {selectedCard.resume}
                                        </Text>
                                        :
                                        null
                                }
                                <Text style={{ fontSize: scaleFont(18), fontWeight: "bold", color: COR.branco, marginBottom: scaleHeight(15), paddingHorizontal: scaleWidth(30) }}>{groupId === "001" ? "Aparições:" : groupId === "002" ? "Disponível em" : "Disponível para compra:"}</Text>
                                <View style={groupId != "001" ? { flexDirection: "row", paddingHorizontal: scaleFont(30) } : {}}>
                                    {
                                        selectedCard && (
                                            groupId === "001" ? (
                                                (selectedCard as Card).aparicoes.map((aparicao, index) => (
                                                    <Text key={index} style={{ fontSize: scaleFont(14), color: COR.branco, marginBottom: scaleHeight(5), paddingHorizontal: scaleWidth(30) }}>
                                                        {aparicao}
                                                    </Text>
                                                ))
                                            ) : (
                                                (selectedCard as Card2).disponivel.map((disponivel, index) => (
                                                    <Image key={index} style={styles.imagePart} source={disponivel} />
                                                ))
                                            )
                                        )
                                    }
                                </View>


                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30 }}>
                                <View>
                                    <Text style={{ color: COR.branco, fontSize: scaleFont(22), fontWeight: "bold", textAlign: "left", marginLeft: scaleFont(5), marginBottom: scaleHeight(5) }}>{groupId == "001" ? "Avaliação dos fãs:" : "Crítica:"}</Text>
                                    <View style={styles.starsRow}>
                                        {[1, 2, 3, 4, 5].map((star) => {
                                            let iconName = "star-o";
                                            if (star <= Math.floor(selectedCard.stars)) {
                                                iconName = "star";
                                            } else if (star === Math.ceil(selectedCard.stars) && selectedCard.stars % 1 !== 0) {
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


                                <TouchableOpacity style={styles.butonCloseGroups} onPress={() => setSelectedCard(null)}>
                                    <Text style={{
                                        color: COR.branco,
                                        fontSize: scaleFont(25),
                                        alignSelf: "center",
                                    }}>
                                        X
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </>
                    )}
                </View>
            </Modal>
        </View>
    );
}
