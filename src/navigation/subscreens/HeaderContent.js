import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { createDynamicStyles } from '../../assets/style/main';
import { FontSizeContext } from '../../assets/utils/FontSizeContext';

const HeaderContent = ({ title, imageSource, contentText }) => {
    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes);
                return (
                    <View style={styles.cardContainer}>
                        <Text style={styles.subScreenTitle}>
                            {title}
                        </Text>
                        <Image
                            source={imageSource}
                            style={styles.cardImageSubscreen}
                        />
                        <Text style={styles.contentCardText}>
                            {contentText}
                        </Text>
                    </View>
                );
            }}
        </FontSizeContext.Consumer>
    );
}

const ContentleftImg = ({ title, imageSource, contentText }) => {
    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes);
                return (
                    <View style={styles.cardContainer}>
                        <Text style={styles.subScreenSubTitle}>
                            {title}
                        </Text>
                        <View style={styles.contentSubContainer}>
                            <Image
                                source={imageSource}
                                style={styles.subImageStyle}
                            />
                            <Text style={styles.contentText}>
                                {contentText}
                            </Text>
                        </View>
                    </View>
                );
            }}
        </FontSizeContext.Consumer>
    );
};

const ContentRightImg = ({ title, imageSource, contentText }) => {
    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes);
                return (
                    <View style={styles.cardContainer}>
                        <Text style={styles.subScreenSubTitle}>
                            {title}
                        </Text>
                        <View style={styles.contentSubContainerRight}>
                            <Image
                                source={imageSource}
                                style={styles.subImageStyle}
                            />
                            <Text style={styles.contentText}>
                                {contentText}
                            </Text>
                        </View>
                    </View>
                );
            }}
        </FontSizeContext.Consumer>
    );
};

const ContentWithoutImg = ({ title, contentText }) => {
    return (
        <FontSizeContext.Consumer>
            {({ fontSizes }) => {
                const styles = createDynamicStyles(fontSizes);
                return (
                    <View style={styles.cardContainer}>
                        <Text style={styles.subScreenSubTitle}>
                            {title}
                        </Text>
                        <View style={styles.contentSubContainer}>
                            <Text style={styles.contentText}>
                                {contentText}
                            </Text>
                        </View>
                    </View>
                );
            }}
        </FontSizeContext.Consumer>
    );
};

export { HeaderContent, ContentleftImg, ContentWithoutImg, ContentRightImg };
