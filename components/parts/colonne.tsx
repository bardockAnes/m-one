import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useWorkContext } from "@/providers/WorkContext";
import { maincolor, styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";

type ComponentProps = {
    setComponent: (component: string | null) => void;
};

export const Colonne: React.FC<ComponentProps> = ({ setComponent }) => {
    const {
        hauteurcolonne,
        setHauteurcolonne,
        profondeurcolonne,
        setProfondeurcolonne,
        longueurcolonne,
        clear,
        clearcolone,
        addcolonne,
        setLongueurcolonne,
    } = useWorkContext();

    const HauteurSize = [230, 240, 260];
    const ProfondeurSize = [50, 55, 60];
    const LongueurSize = [40,50,60];

    return (
        <View style={{ flex: 1, justifyContent:"center"}}>
            <View style={styles.componentA}>
                <Pressable style={styles.backButton} onPress={() => setComponent(null)}>
                <Ionicons name="arrow-back-circle" size={40} color={maincolor}/>
                </Pressable>
                <Pressable style={styles.rightTitle} onPress={() => setComponent(null)}>
                <Text style={styles.size}>Colonne</Text>
                </Pressable>
                <Text style={styles.sizeT}>Hauteur</Text>
                <View style={styles.layout}>
                    {HauteurSize.map((size) => (
                        <Pressable
                            onPress={() => { setHauteurcolonne(size); }}
                            style={[
                                styles.choices, 
                                hauteurcolonne === size && styles.selectedChoice]}
                            key={size}
                        >
                            <Text style={styles.size}>{size}</Text>
                        </Pressable>
                    ))}
                </View>
                <Text style={styles.sizeT}>Profondeur</Text>
                <View style={styles.layout}>
                    {ProfondeurSize.map((size) => (
                        <Pressable
                            onPress={() => { setProfondeurcolonne(size); }}
                            style={[
                                styles.choices, 
                                profondeurcolonne === size && styles.selectedChoice]}
                            key={size}
                        >
                            <Text style={styles.size}>{size}</Text>
                        </Pressable>
                    ))}
                </View>
                <Text style={styles.sizeT}>Longueur</Text>
                <View style={styles.layout}>
                    {LongueurSize.map((size) => (
                        <Pressable
                            onPress={() => { setLongueurcolonne(size); }}
                            style={[
                                styles.choices, 
                                longueurcolonne === size && styles.selectedChoice]}
                            key={size}
                        >
                            <Text style={styles.size}>{size}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
            <View style={styles.import}>
                <Pressable onPress={clearcolone} onLongPress={clear} style={styles.importB}>
                    <Text style={styles.text}>Supprimer</Text>
                </Pressable>
                <Pressable onPress={addcolonne} style={styles.importB}>
                    <Text style={styles.text}>Ajouter</Text>
                </Pressable>
            </View>
        </View>
    );
};
