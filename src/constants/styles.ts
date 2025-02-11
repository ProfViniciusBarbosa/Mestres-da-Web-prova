import { Dimensions, StyleSheet } from "react-native";
import COR from "../constants/COR";
import { scaleWidth, scaleHeight, scaleFont } from "../utils/responsive";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    keyboardView: {
        flex: 1,
        height: "100%",
    },
    containerHome: {
        flex: 1,
        flexDirection: "row",
    },
    sidebarHome: {
        width: scaleWidth(65),
        height: "100%",
        backgroundColor: COR.preto,
        alignItems: "flex-end",
        justifyContent: "center",

    },
    menuItemHome: {
        height: scaleHeight(120),
        width: scaleWidth(125),
        marginBottom: scaleFont(12),
        marginTop: scaleFont(12),
    },
    menuTextHome: {
        color: "#fff",
        textAlign: "center",
        fontSize: scaleFont(18),

    },
    mainScreenHome: {
        flex: 1,
        backgroundColor: COR.preto,
    },
    textHome: {
        color: "#fff",
        fontSize: scaleFont(20),
    },
    gradienteSetingsHome: {
        height: scaleHeight(70),
        width: scaleWidth(160),
        transform: [{ rotate: "+90deg" }],
        justifyContent: "center",
        borderRadius: scaleWidth(20),
        overflow: "hidden"
    },
    header: {
        height: scaleHeight(480),
        width: "100%",
        alignSelf: "center",
        backgroundColor: COR.preto,
    },
    logo: {
        height: scaleHeight(65),
        width: scaleWidth(230),
        alignSelf: "center",
        marginTop: scaleHeight(60),
        marginBottom: scaleHeight(30),
    },
    welcomeContainer: {
        alignSelf: "center",
        alignItems: "center",
        paddingBottom: scaleHeight(10),
    },
    welcomeText: {
        fontSize: scaleFont(22),
        fontWeight: "bold",
        marginBottom: scaleHeight(5),
        color: COR.branco,
    },
    loginText: {
        fontSize: scaleFont(18),
        color: COR.branco,
    },
    inputContainer: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        marginTop: scaleHeight(3),
        alignSelf: "center",
        width: "70%",
        borderRadius: scaleWidth(18),
        height: scaleHeight(42),
    },
    input: {
        height: scaleHeight(42),
        marginLeft: scaleWidth(20),
        marginRight: scaleWidth(20),
        fontSize: scaleFont(20),
        marginVertical: scaleHeight(3),
    },
    passwordContainer: {
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: "70%",
        marginTop: scaleHeight(12),
        alignSelf: "center",
        borderRadius: scaleWidth(18),
        height: scaleHeight(42),
    },
    passwordInput: {
        height: scaleHeight(42),
        marginLeft: scaleWidth(20),
        fontSize: scaleFont(20),
        width: "75%",
    },
    eyeIcon: {
        marginVertical: scaleHeight(12),
        marginLeft: scaleWidth(5),
        marginRight: scaleWidth(10),
    },
    eyeImage: {
        tintColor: "black",
        width: scaleWidth(27),
        height: scaleHeight(18),
    },
    loginButton: {
        alignSelf: "center",
        marginTop: scaleHeight(20),
        backgroundColor: COR.vermelho,
        width: "70%",
        height: scaleHeight(40),
        borderRadius: scaleWidth(18),
    },
    loginButtonText: {
        fontSize: scaleFont(20),
        paddingVertical: scaleHeight(6),
        alignSelf: "center",
        color: COR.branco,
    },
    checkboxContainer: {
        alignSelf: "center",
        marginTop: scaleHeight(20),
        height: scaleHeight(40),
        borderRadius: scaleWidth(8),
    },
    checkboxRow: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: scaleHeight(10),
    },
    checkbox: {
        borderWidth: scaleWidth(2),
        borderColor: COR.vermelho,
        backgroundColor: "white",
        borderRadius: scaleWidth(5),
        width: scaleWidth(20),
        height: scaleHeight(20),
    },
    checkboxText: {
        paddingLeft: scaleWidth(10),
        marginVertical: scaleHeight(3),
        fontSize: scaleFont(10),
        color: COR.branco,
    },
    registerContainer: {
        flexDirection: "row",
        alignSelf: "center",
    },
    registerText: {
        fontSize: scaleFont(18),
        color: COR.branco,
    },
    registerButtonText: {
        fontSize: scaleFont(18),
        color: COR.vermelho,
    },
    backgroundImage: {
        height: "45%",
        width: "100%",
    },
    gradient: {
        height: "45%",
        width: "100%",
        position: "absolute",
        top: "55%",
    },
    containerScreen: {
        marginTop: scaleHeight(50),
        paddingLeft: scaleWidth(10),
    },
    itemContainer: {
        width: scaleWidth(320),
        alignItems: "center",
    },
    image: {
        width: "45%",
        height: scaleHeight(180),
        borderRadius: scaleWidth(30),
        borderWidth: 1,
        alignSelf: "baseline",
        borderColor: COR.vermelho,
        resizeMode: "cover",
    },
    textTitle: {
        fontSize: scaleFont(18),
        color: COR.branco,
        textAlign: "left",
        marginBottom: scaleHeight(20),
    },
    gradienteSetings: {
        height: scaleHeight(60),
        width: "85%",
        justifyContent: "space-between",
        borderTopLeftRadius: scaleWidth(30),
        borderBottomLeftRadius: scaleWidth(30),
        borderTopRightRadius: scaleWidth(20),
        borderBottomRightRadius: scaleWidth(20),
        overflow: "hidden",
        alignSelf: "baseline",
        marginTop: scaleHeight(-60),
        flexDirection: "row",
    },
    starsView: {
        width: "60%",
        height: scaleHeight(60),
        backgroundColor: COR.preto,
        borderRadius: scaleWidth(20),
        borderWidth: 1,
        borderColor: COR.vermelho,
        justifyContent: "center",
    },
    starIcon: {
        marginHorizontal: scaleWidth(5),
    },
    ratingText: {
        color: "white",
        fontSize: scaleFont(12),
        textAlign: "center",
        marginBottom: scaleHeight(5),
    },
    starsRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textBoxText: {
        color: "white",
        fontSize: scaleFont(14),
        textAlignVertical: "center",
        flexWrap: "wrap",
        paddingHorizontal: scaleWidth(10),
        maxWidth: scaleWidth(110),
    },
    geralBoxText: {
        color: "white",
        fontSize: scaleFont(18),
        paddingTop: scaleHeight(10),
    },
    plusFormat: {
        color: "white",
        fontSize: scaleFont(30),
        fontWeight: "bold",
        paddingTop: scaleHeight(2),
        paddingRight: scaleWidth(10),
    },
    InfoHeroText: {
        color: "white",
        fontSize: scaleFont(15),
        flexWrap: "wrap",
        textAlign: "justify",
        height: scaleHeight(90),
    },
    imageMid: {
        width: "22%",
        height: scaleHeight(80),
        borderRadius: scaleWidth(20),
        resizeMode: "cover",
        position: "absolute",
        alignSelf: "baseline",
        marginLeft: "47%",
        opacity: 0.5,
    },
    imageLow: {
        width: "10%",
        height: scaleHeight(30),
        borderRadius: scaleWidth(10),
        resizeMode: "cover",
        alignSelf: "baseline",
        position: "absolute",
        marginLeft: "71%",
        opacity: 0.3,
    },
    boxInfo: {
        marginTop: scaleHeight(30),
        width: "80%",
        alignSelf: "baseline",
        paddingHorizontal: scaleWidth(10),
    },
    seeMoreText: {
        color: COR.vermelho,
        fontSize: scaleFont(12),
        paddingTop: scaleHeight(5),
        paddingBottom: scaleHeight(5),
    },
    imagePart: {
        width: "21%",
        height: scaleHeight(58),
        borderRadius: scaleWidth(10),
        marginRight: scaleWidth(8),
    },
    characterFormat: {
        flexDirection: "row",
        marginTop: scaleHeight(10),
        paddingHorizontal: scaleWidth(10),
        width: "95%",
        justifyContent: "space-between",
    },
    imgBottom: {
        height: scaleHeight(80),
        width: scaleWidth(125),
        borderRadius: scaleWidth(20),
        resizeMode: "cover",
    },
    appbarHeader: {
        backgroundColor: COR.preto,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scaleWidth(20),
    },
    menuIcon: {
        height: scaleHeight(23),
        width: scaleWidth(28),
    },
    marvelLogo: {
        width: scaleWidth(120),
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Escurece o fundo
    },
    menuContainer: {
        position: 'absolute',
        top: scaleFont(10),
        backgroundColor: COR.preto,
        padding: scaleFont(10),
        width: scaleWidth(200),
        borderRadius: scaleFont(20),
    },
    profileContainer: {
        alignItems: 'center',
        padding: scaleWidth(10),
    },
    profileImage: {
        width: scaleWidth(50),
        height: scaleFont(50),
        borderRadius: scaleFont(25),
        alignSelf: 'baseline',
    },
    menuItem: {
        color: COR.vermelho,
        fontSize: scaleFont(18),
    },
    telaGroups: {
        flexDirection: "row",
        paddingTop: scaleFont(50),
        paddingLeft: scaleFont(30)
    },
    viewCardGroups: {
        width: width * 0.98,
        height,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    viewCardDivisorGroups: {
        width: width / 2.2,
        height: height / 3,
        padding: scaleHeight(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradientCardGroups: {
        marginTop: scaleHeight(-120),
        width: "100%",
        height: "50%",
        borderRadius: scaleFont(30)
    },
    butonCloseGroups:{
        width: scaleWidth(42),
        height: scaleHeight(42),
        borderWidth: scaleFont(3),
        borderColor: COR.branco,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: scaleFont(30),
        alignSelf: "flex-end",
    }
});
