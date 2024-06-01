import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useWorkContext } from '@/providers/WorkContext';
import { maincolor, ornge, whitecrem } from '@/constants/styles';

const Screen = () => {
    const {
        kison,
        kisonhaut,
        kisoncolonne
    } = useWorkContext();

    return (
        <ScrollView horizontal={true}>
            <View style={styles.screen}>
                <View style={{ flexDirection: "column", maxHeight: 360 }}>
                    <View style={{ flexDirection: "row-reverse", height: "50%" }}>
                        {kisonhaut.map((kisonhaut, index) => (
                            <View style={styles.item2} key={index}>
                                <View style={{ width: kisonhaut.longueurhaut * 1.5, height: kisonhaut.hauteurhaut * 1.5, backgroundColor: maincolor, borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={styles.itemText}>{kisonhaut.longueurhaut}</Text>
                                    <View style={{flexDirection:"row", gap:5}}>
                                        <Text style={styles.itemText2}>H.{kisonhaut.hauteurhaut}</Text>
                                        <Text style={styles.itemText2}>P.{kisonhaut.profondeurhaut}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={{ flexDirection: "row-reverse", height: "50%", alignItems: "flex-end" }}>
                        {kison.map((kison, index) => (
                            <View style={styles.item} key={index}>
                                <View style={{ width: kison.longueur * 1.5, height: kison.hauteur * 1.5, backgroundColor: maincolor, borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={styles.itemText}>{kison.longueur}</Text>
                                    <View style={{flexDirection:"row", gap:5}}>
                                        <Text style={styles.itemText2}>H.{kison.hauteur}</Text>
                                        <Text style={styles.itemText2}>P.{kison.profondeur}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>

                </View>
                <View style={{ flexDirection: "row" }}>
                    {kisoncolonne.map((kisoncolonne, index) => (
                        <View style={styles.item3} key={index}>
                            <View style={{ width: kisoncolonne.longueurcolonne * 1.5, height: kisoncolonne.hauteurcolonne * 1.5, backgroundColor: maincolor, borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.itemText}>{kisoncolonne.longueurcolonne}</Text>
                                <View style={{flexDirection:"row", gap:5}}>
                                        <Text style={styles.itemText2}>H.{kisoncolonne.hauteurcolonne}</Text>
                                        <Text style={styles.itemText2}>P.{kisoncolonne.profondeurcolonne}</Text>
                                    </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    },
    item: {
        flexDirection: "column",
        justifyContent: "flex-end",
        marginHorizontal: 5

    },
    item2: {
        flexDirection: "column",
        marginHorizontal: 5
    },
    item3: {
        borderRadius: 12,
        marginHorizontal: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    itemText: {
        color: whitecrem,
        fontSize: 16,
    },
    itemText2: {
        color: whitecrem,
        fontSize: 10,
    },
    dimension: {
        flexDirection: "row",
        gap: 15,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    dimensionText: {
        fontSize: 13
    }
});

export default Screen;
