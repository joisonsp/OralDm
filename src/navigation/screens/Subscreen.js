import * as React from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { FontSizeContext } from '../../assets/utils/FontSizeContext';
import { LanguageContext } from '../../assets/utils/LanguageContext';
import { createDynamicStyles } from '../../assets/style/main'; // Importa a função para gerar estilos dinâmicos

const screenWidth = Dimensions.get('window').width;

// Componente Card
const Card = ({ imageSource, onPress, styles, label }) => (
    <View style={styles.cardContainer}>
        <Image
            source={imageSource}
            style={styles.cardImage}
        />
        <TouchableOpacity style={styles.accessButtonSub} onPress={onPress}>
            <Text style={styles.accessButtonTitleSub}>{label}</Text>
        </TouchableOpacity>
    </View>
);

export default function SubScreen({ navigation, screenTitle, cardsData }) {
    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes); // Cria estilos dinâmicos com base no tamanho de fonte

                return (
                    <LanguageContext.Consumer>
                        {({ language }) => {
                            // Tradução condicional com base no idioma
                            const translatedScreenTitle = language === 'pt' ? 'DIABETES' : 'DIABETES';
                            const translatedSwipeMessage = language === 'pt' ? 'DESLIZE A TELA PARA ACESSAR O CONTEÚDO' : 'SWIPE TO ACCESS THE CONTENT';
                            const translatedBackButton = language === 'pt' ? 'VOLTAR' : 'BACK';
                            const translatedCardLabel = language === 'pt' ? 'CLIQUE PARA LER SOBRE' : 'CLICK TO READ ABOUT';

                            return (
                                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                                    <Text style={styles.subScreenTitle}>
                                        {translatedScreenTitle}
                                    </Text>
                                    <Text style={styles.subtitleText}>
                                        {translatedSwipeMessage}
                                    </Text>

                                    {cardsData.map((card, index) => (
                                        <Card
                                            key={index}
                                            imageSource={card.imageSource}
                                            styles={styles}  // Passa os estilos dinâmicos para o Card
                                            label={translatedCardLabel} // Rótulo do botão com base no idioma
                                            onPress={() => {
                                                if (card.screenName) {
                                                    // Navega para a aba correspondente
                                                    navigation.navigate(card.screenName);
                                                } else {
                                                    console.log(`Card ${index + 1} doesn't navigate.`);
                                                }
                                            }}
                                        />
                                    ))}

                                    <TouchableOpacity style={[styles.accessButton]} onPress={() => navigation.navigate(language === 'pt' ? 'Início' : 'Home')}>
                                        <Text style={styles.accessButtonTitle}>{language === 'pt' ? 'VOLTAR' : 'BACK'}</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            );
                        }}
                    </LanguageContext.Consumer>
                );
            }}
        </FontSizeContext.Consumer>
    );
}

