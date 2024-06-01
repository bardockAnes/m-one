import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useWorkContext } from "@/providers/WorkContext";
import { maincolor, styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";

type ComponentProps = {
  setComponent: (component: string | null) => void;
};

export const CaissonHaut: React.FC<ComponentProps> = ({ setComponent }) => {
  const {
    hauteurhaut,
    setHauteurhaut,
    profondeurhaut,
    setProfondeurhaut,
    longueurhaut,
    setLongueurhaut,
    clearhaut,
    clear,
    addhaut,
  } = useWorkContext();

  const HauteurSize = [35, 70, 75, 80, 90];
  const ProfondeurSize = [30, 32, 35];
  const LongueurSize = [40, 60, 80, 90];

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.componentA}>
        <Pressable style={styles.backButton} onPress={() => setComponent(null)}>
          <Ionicons name="arrow-back-circle" size={40} color={maincolor} />
        </Pressable>
        <Pressable style={styles.rightTitle} onPress={() => setComponent(null)}>
          <Text style={styles.size}>Caisson haut</Text>
        </Pressable>
        <Text style={styles.sizeT}>Hauteur</Text>
        <View style={styles.layout}>
          {HauteurSize.map((size) => (
            <Pressable
              onPress={() => {
                setHauteurhaut(size);
              }}
              style={[
                styles.choices,
                hauteurhaut === size && styles.selectedChoice]}
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
              onPress={() => {
                setProfondeurhaut(size);
              }}
              style={[
                styles.choices,
                profondeurhaut === size && styles.selectedChoice]}
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
              onPress={() => {
                setLongueurhaut(size);
              }}
              style={[
                styles.choices,
                longueurhaut === size && styles.selectedChoice]}
              key={size}
            >
              <Text style={styles.size}>{size}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.import}>
        <Pressable onPress={clearhaut} onLongPress={clear} style={styles.importB}>
          <Text style={styles.text}>Supprimer</Text>
        </Pressable>
        <Pressable onPress={addhaut} style={styles.importB}>
          <Text style={styles.text}>Ajouter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CaissonHaut;