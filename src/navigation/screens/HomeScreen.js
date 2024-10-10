import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { createDynamicStyles } from '../../assets/style/main';
import { FontSizeContext } from '../../assets/utils/FontSizeContext';
import { LanguageContext } from '../../assets/utils/LanguageContext';

// Obtem a largura da tela
const screenWidth = Dimensions.get('window').width;

// Componente Card
const Card = ({ imageSource, onPress, styles, label }) => (
    <View style={styles.cardContainer}>
        <Image
            source={imageSource}
            style={styles.cardImage}
        />
        <TouchableOpacity style={styles.accessButton} onPress={onPress}>
            <Text style={styles.accessButtonTitle}>{label}</Text>
        </TouchableOpacity>
    </View>
);

export default function HomeScreen({ navigation }) {
    // Dados dos cards com screenName adaptado para pt e en
    const cardsData = [
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/MAIN/diabetes.png'),
                en: require('../../assets/img/PAGINA_CARD/MAIN/diabetes.png')
            },
            screenName: {
                pt: "Diabetes",
                en: "Diabetes",
            },
            label: {
                pt: 'ACESSAR',
                en: 'DIABETES-ACCESS',
            },
        },
        {
            imageSource: {
               pt: require('../../assets/img/PAGINA_CARD/MAIN/MAIN_DOENÇAS_CARD_IMAGE.png'),
               en: require('../../assets/img/PAGINA_CARD/MAIN/DISEASES.png')
            },
            screenName: {
                pt: "Doenças",
                en: "Diseases",
            },
            label: {
                pt: 'ACESSAR',
                en: 'Diseases',
            },
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/MAIN/MAIN_CUIDADOS_CARD_IMAGE.png'),
                en: require('../../assets/img/PAGINA_CARD/MAIN/CARE.png')
            },
            screenName: {
                pt: "Cuidados",
                en: "Care",
            },
            label: {
                pt: 'ACESSAR',
                en: 'Care',
            },
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/MAIN/MAIN_DICAS_CARD_IMAGE.png'),
                en: require('../../assets/img/PAGINA_CARD/MAIN/TIPS.png')
            },
            screenName: {
                pt: "Dicas",
                en: "Tips",
            },
            label: {
                pt: 'ACESSAR',
                en: 'Tips',
            },
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/MAIN/MAIN_CRÉDITOS_CARD_IMAGE.png'),
                en: require('../../assets/img/PAGINA_CARD/MAIN/CREDITS.png')
            },
            screenName: {
                pt: "Créditos",
                en: "Credits",
            },
            label: {
                pt: 'ACESSAR',
                en: 'Credits',
            },
        },
        {
            imageSource: {
                pt: require('../../assets/img/PAGINA_CARD/MAIN/AJUSTES.png'),
                en: require('../../assets/img/PAGINA_CARD/MAIN/ADJUSTMENTS.png')
            },
            screenName: {
                pt: "Settings",
                en: "Settings",
            },
            label: {
                pt: 'ACESSAR',
                en: 'ADJUSTMENTS',
            },
        }
        
    ];

    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => (
                <LanguageContext.Consumer>
                    {({ language }) => {
                        const styles = createDynamicStyles(fontSizes); // Gera os estilos dinamicamente com base no contexto de fonte

                        return (
                            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                                <Image
                                    source={require('../../assets/img/APP_ICONS/SPLASH_1280x1920_cut.jpg')}
                                    style={styles.mainImage}
                                />
                                <Text style={styles.titleText}>
                                    {language === 'pt' ? 'Guia de saúde bucal ao idoso Diabético' : 'Oral Health Guide for Diabetic Elderly'}
                                </Text>
                                <Text style={styles.subtitleText}>
                                    {language === 'pt' ? 'NAVEGUE PELAS PÁGINAS ATRAVÉS DOS BOTÕES ABAIXO:' : 'NAVIGATE THROUGH THE PAGES USING THE BUTTONS BELOW:'}
                                </Text>

                                {cardsData.map((card, index) => (
                                    <Card
                                        key={index}
                                        imageSource={language === 'pt' ? card.imageSource.pt : card.imageSource.en}
                                        styles={styles}
                                        label={language === 'pt' ? card.label.pt : card.label.en}
                                        onPress={() => {
                                            const selectedScreenName = language === 'pt' ? card.screenName.pt : card.screenName.en;
                                            if (selectedScreenName) {
                                                navigation.navigate(selectedScreenName);
                                            } else {
                                                console.log(`Card ${index + 1} doesn't navigate.`);
                                            }
                                        }}
                                    />
                                ))}

                                <Text style={styles.reminderText}>{language === 'pt' ? 'LEMBRETE' : 'REMINDER'}</Text>
                                <Text style={styles.infoText}>
                                    {language === 'pt'
                                        ? 'Esse aplicativo é apenas um informativo, não substitui a consulta com o cirurgião-dentista e demais profissionais de saúde.'
                                        : 'This app is for informational purposes only and does not replace a consultation with a dentist or other healthcare professionals.'
                                    }
                                </Text>
                                <Text style={styles.footerText}>
                                    {language === 'pt'
                                        ? 'Esse é um produto do Programa de Mestrado Profissional em Gerontologia (PMPG) da Universidade Federal da Paraíba - UFPB'
                                        : 'This is a product of the Professional Master’s Program in Gerontology (PMPG) at the Federal University of Paraíba - UFPB'
                                    }
                                </Text>
                                <Image
                                    source={require('../../assets/img/LOGOS/PMPG.png')}
                                    style={styles.logoPMGP}
                                />
                            </ScrollView>
                        );
                    }}
                </LanguageContext.Consumer>
            )}
        </FontSizeContext.Consumer>
    );
}
