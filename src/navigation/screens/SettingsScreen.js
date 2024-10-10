import React, { useContext } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native';
import { createDynamicStyles } from '../../assets/style/main';
import { FontSizeContext } from '../../assets/utils/FontSizeContext';
import { LanguageContext } from '../../assets/utils/LanguageContext';

export default function SettingsScreen({ navigation }) {
    const { fontSize, increaseFontSize, decreaseFontSize } = useContext(FontSizeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes); // Cria os estilos com base no tamanho de fonte atual

                return (
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <Text style={styles.subScreenTitle}>
                            {language === 'pt' ? 'AJUSTES' : 'SETTINGS'}
                        </Text>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                            <Text style={[styles.subtitleText, { marginBottom: 20 }]}>
                                {language === 'pt' ? 'Mude o idioma para: ' : 'Change the language to'}
                            </Text>
                            <TouchableOpacity style={styles.accessButtonSub} onPress={toggleLanguage}>
                                <Text style={styles.accessButtonTitleSub}>{language === 'pt' ? 'Inglês' : 'Portuguese'}</Text>
                            </TouchableOpacity>

                            <Text style={[styles.subtitleText, { marginBottom: 20, marginTop: 20 }]}>
                                {language === 'pt' ? 'Altere o tamanho da Fonte Atual' : 'Change the Current Font Size'}: {fontSize}
                            </Text>
                            <TouchableOpacity style={styles.accessButtonSub} onPress={increaseFontSize}>
                                <Text style={styles.accessButtonTitleSub}>{language === 'pt' ? 'Aumentar Fonte' : 'Increase Font Size'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.accessButtonSub} onPress={decreaseFontSize}>
                                <Text style={styles.accessButtonTitleSub}>{language === 'pt' ? 'Diminuir Fonte' : 'Decrease Font Size'}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.accessButton, { marginTop: 50 }]} onPress={() => navigation.navigate(language === 'pt' ? 'Início' : 'Home')}>
                                <Text style={styles.accessButtonTitle}>{language === 'pt' ? 'VOLTAR' : 'BACK'}</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                );
            }}
        </FontSizeContext.Consumer>
    );
}
