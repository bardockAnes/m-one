import React from "react";
import { ScrollView, Pressable, StyleSheet, View, Text } from "react-native";
import { useWorkContext } from "@/providers/WorkContext";
import { styles,maincolor } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";

export const CaissonBas: React.FC<{ setComponent: (component: string | null) => void }> = ({ setComponent }) => {

    const {
      hauteur,
      setHauteur,
      profondeur,
      setProfondeur,
      longueur,
      clear,
      clearbas,
      add,
      setLongueur,
    } = useWorkContext();
  
    const HauteurSize = [70, 75, 80];
    const ProfondeurSize = [50, 55, 60];
    const LongueurSize = [40, 60, 80, 90];
  
    return (
      <View style={{ flex: 1, justifyContent:"center"}}>
        <View style={styles.componentA}>
          <Pressable style={styles.backButton} onPress={() => setComponent(null)}>
            <Ionicons name="arrow-back-circle" size={40} color={maincolor}/>
          </Pressable>
          <Pressable style={styles.rightTitle} onPress={() => setComponent(null)}>
            <Text style={styles.size}>Caisson bas</Text>
          </Pressable>
          <Text style={styles.sizeT}>Hauteur</Text>
          <View style={styles.layout}>
            {HauteurSize.map((size) => (
              <Pressable
                onPress={() => { setHauteur(size); }}
                style={[
                  styles.choices, 
                  hauteur === size && styles.selectedChoice]}          
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
                onPress={() => { setProfondeur(size); }}
                style={[
                  styles.choices, 
                  profondeur === size && styles.selectedChoice]}
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
                onPress={() => { setLongueur(size); }}
                style={[
                  styles.choices, 
                  longueur === size && styles.selectedChoice]}
                    key={size}
              >
                <Text style={styles.size}>{size}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.import}>
          <Pressable onPress={clearbas} onLongPress={clear} style={styles.importB}>
            <Text style={styles.text}>Supprimer</Text>
          </Pressable>
          <Pressable onPress={add} style={styles.importB}>
            <Text style={styles.text}>Ajouter</Text>
          </Pressable>
        </View>
      </View>
    );
  };

