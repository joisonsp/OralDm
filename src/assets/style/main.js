import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Função para gerar estilos dinâmicos com base nos tamanhos de fonte
export const createDynamicStyles = (fontSizes) => StyleSheet.create({
    scrollViewContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#fff',
        flexDirection: "column",
        justifyContent: "center",
        display: "flex",
    },
    cardContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    contentSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width: screenWidth * 0.9,
    },
    subImageStyle: {
        width: 100,
        height: 100,
        marginRight: 0,
    },
    mainImage: {
        width: screenWidth * 0.9,
        height: screenWidth * 0.3,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: fontSizes.titleText, // Fonte dinâmica
        fontWeight: '400',
        textAlign: 'center',
        marginVertical: 20,
        color: '#000000',
    },
    subtitleText: {
        textAlign: 'justify',
        marginBottom: 20,
        fontSize: fontSizes.subtitleText, // Fonte dinâmica
        width: screenWidth * 0.9,
        color: "black"
    },
    accessButtonTitle: {
        color: '#003479',
        fontSize: fontSizes.accessButtonTitle, // Fonte dinâmica
        fontWeight: 'bold',
        textAlign: 'center', // Alinha horizontalmente o texto
        textAlignVertical: 'center', // Alinha verticalmente o texto (Android)
    },
    subScreenTitle: {
        color: '#003479',
        fontSize: fontSizes.subScreenTitle, // Fonte dinâmica
        fontWeight: '900',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    reminderText: {
        marginTop: 15,
        fontWeight: '400',
        fontSize: fontSizes.reminderText, // Fonte dinâmica
        color: '#0088A3'
    },
    infoText: {
        textAlign: 'justify',
        marginTop: 10,
        fontSize: fontSizes.infoText, // Fonte dinâmica
        color: '#000000',
        width: screenWidth * 0.95,
    },
    contentCardText: {
        textAlign: 'justify',
        marginTop: 10,
        fontSize: fontSizes.contentCardText, // Fonte dinâmica
        color: '#000000',
        width: screenWidth * 0.90,
    },
    footerText: {
        textAlign: 'justify',
        marginVertical: 20,
        fontSize: fontSizes.footerText, // Fonte dinâmica
        width: screenWidth * 0.8,
        color: "black"
    },
    subScreenSubTitle: {
        textAlign: 'center',
        fontSize: fontSizes.subScreenSubTitle, // Fonte dinâmica
        fontWeight: 'bold',
        color: '#00695C',
        marginBottom: 10,
    },
    contentText: {
        flex: 1,
        fontSize: fontSizes.contentText, // Fonte dinâmica
        color: '#333',
    },
    cardImage: {
        width: screenWidth * 0.9,
        height: screenWidth * 0.4,
        resizeMode: 'cover',
        borderRadius: 12,
    },
    cardImageSubscreen: {
        width: screenWidth * 0.95,
        height: screenWidth * 0.5,
        resizeMode: 'cover',
        borderRadius: 12,
    },
    contentSubContainerRight: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width: screenWidth * 0.9,
    },
    accessButton: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        color: '#003479',
        borderColor: '#003479',
        borderWidth: 3,
        width: screenWidth * 0.6,
        height: screenWidth * 0.15,
        justifyContent: 'center', // Alinha verticalmente
        alignItems: 'center', // Alinha horizontalmente
    },
    accessButtonTitleSub: {
        color: '#ffffff',
        fontSize: fontSizes.accessButtonTitleSub,
        fontWeight: 'bold',
        textAlignVertical: 'center'

    },
    accessButtonSub: {
        backgroundColor: '#003479',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        color: '#ffffff',
        borderColor: '#003479',
        borderWidth: 3,
        width: screenWidth * 0.95,
        height: screenWidth * 0.12,
        justifyContent: 'center', // Alinha verticalmente
        alignItems: 'center', // Alinha horizontalmente
    },
    logoPMGP: {
        width: screenWidth * 0.9,
        height: screenWidth * 0.3,
        resizeMode: 'contain',
    },
});

export default createDynamicStyles;
