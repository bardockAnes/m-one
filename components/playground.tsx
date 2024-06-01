import React from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { CaissonHaut, CaissonBas, Colonne, ExportCSV } from "@/components/Parts"; // Removed unused import ComponentD, ComponentE, ComponentF
import { useWorkContext } from "@/providers/WorkContext";
import { stylesPlay } from "@/constants/styles";

export const Playground = () => {

  const {
    importPlans,
    activeComponent,
    setActiveComponent,
  } = useWorkContext();

  return (
    <View style={stylesPlay.playground}>
      {activeComponent === 'CaissonHaut' && <CaissonHaut setComponent={setActiveComponent} />}
      {activeComponent === 'CaissonBas' && <CaissonBas setComponent={setActiveComponent} />}
      {activeComponent === 'Colonne' && <Colonne setComponent={setActiveComponent} />}
      {activeComponent === 'ExportCSV' && <ExportCSV setComponent={setActiveComponent} />}
  
      {!activeComponent &&  (
        <View style={stylesPlay.layoutBig}>
          <View style={{gap:0}}>
            <Pressable style={stylesPlay.choiceBig} onPress={() => setActiveComponent('CaissonHaut')}>
              <Image style={{ width: 70, height: 80,resizeMode:"contain"}} source={require('../assets/images/kison2.png')} />
              {/* <Text style={stylesPlay.buttonText}>Caisson haut</Text> */}
            </Pressable>
            <Pressable style={stylesPlay.choiceBig} onPress={() => setActiveComponent('CaissonBas')}>
            <Image style={{ width: 70, height: 90,resizeMode:"contain"}} source={require('../assets/images/kisonbas4.png')} />
              {/* <Text style={stylesPlay.buttonText}>Caisson bas</Text> */}
            </Pressable>
          </View>
          <View>
            <Pressable style={stylesPlay.choiceBigColumn} onPress={() => setActiveComponent('Colonne')}>
            <Image style={{ width: 80, height: 250,resizeMode:"contain"}} source={require('../assets/images/colonne2.png')} />
              {/* <Text style={stylesPlay.buttonText}>Colonne</Text> */}
            </Pressable>
          </View>
        </View>
      )}
      {!activeComponent &&  (
        <View style={stylesPlay.importContainer}>
          <Pressable  onPress={() => setActiveComponent('ExportCSV')} style={stylesPlay.importButton}>
            <Text style={stylesPlay.buttonText}>Calculer</Text>
          </Pressable>
        </View>
      )}

    </View>
  );
};

export default Playground;