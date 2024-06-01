import React, { useEffect, useState } from 'react'
import { Text } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { ComponentC, ComponentD, ComponentE, ComponentF } from "@/components/Parts";
import { jsonToCSV } from 'react-native-csv';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Link } from 'expo-router';




type ComponentProps = {
    setComponent: (component: string | null) => void;
};



const Work: React.FC = () => {

    type HauteurSize = 70 | 75 | 80;
    const hauteurSize: HauteurSize[] = [70, 75, 80]
    const [hauteur, sethauteur] = useState<HauteurSize>(70)

    type ProfondeurSize = 50 | 55 | 60;
    const profondeurSize: ProfondeurSize[] = [50, 55, 60]
    const [profondeur, setProfondeur] = useState<ProfondeurSize>(55)

    type LongueurSize = 40 | 60 | 80 | 90;
    const longueurSize: LongueurSize[] = [40, 60, 80, 90]
    const [longueur, setLongueur] = useState<LongueurSize>(60)

    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    const [activeComponentD, setActiveComponentD] = useState<string | null>(null);
    // Function to set the active component
    const setComponent = (component: string | null) => {
        setActiveComponent(component);
    };

    const [kison, setKison] = useState<any>([]);
    const [csvContent, setCsvContent] = useState<string>("");


    useEffect(() => {
        console.log('kison state updated:', kison);
        // Update the CSV content whenever kison changes
        const generateCSVContent = () => {
            const plans = kison.flatMap((kisons: { longueur: number; profondeur: number; hauteur: any; }) => [
                { length: kisons.longueur - 3.2, width: kisons.profondeur, qty: 1 },
                { length: kisons.longueur - 3.2, width: 10, qty: 2 },
                { length: kisons.hauteur, width: kisons.profondeur + 5, qty: 2 }
            ]);

            // Aggregate the quantities
            const aggregatedPlans = plans.reduce((acc: any[], plan: { length: any; width: any; qty: any; }) => {
                const existingPlan = acc.find(p => p.length === plan.length && p.width === plan.width);
                if (existingPlan) {
                    existingPlan.qty += plan.qty;
                } else {
                    acc.push({ ...plan });
                }
                return acc;
            }, []);

            const csv = jsonToCSV(aggregatedPlans);
            setCsvContent(csv);
        };
        generateCSVContent();
    }, [kison]);

    const jsonKison = kison.map((kisons: { longueur: any; profondeur: any; hauteur: any }) => ({
        Length: kisons.longueur - 3.2,
        Width: kisons.profondeur,
    }))
    console.log(csvContent)
    // const csv = jsonToCSV(newArray)


    const add = () => {

        setKison([...kison, { longueur: longueur, profondeur: profondeur, hauteur: hauteur }])
    }

    const celar = () => {
        setKison([])
    }

    const importP = () => {
        setActiveComponent(null)
        setActiveComponentD("ImportPlans")

    }

    const back = () => {
        setActiveComponentD(null)
        setActiveComponent(null)
    }

    const save = async () => {
        try {
            // Save the CSV file to the document directory
            const path = `${FileSystem.documentDirectory}plans.csv`;
            await FileSystem.writeAsStringAsync(path, csvContent);
            console.log('CSV file saved to:', path);
    
            // Share the file
            await Sharing.shareAsync(path);
        } catch (error) {
            console.error('Failed to save and share CSV file:', error);
        }
    };

    
 
    const ComponentB: React.FC<ComponentProps> = ({ setComponent }) => {
        return (
            <View style={styles.componentA}>
               <Pressable  style={{backgroundColor:"green",width:50,height:50}}><Link href="/indexd"> <Text>GO</Text></Link></Pressable>
                <Pressable style={styles.backButton} onPress={() => setComponent(null)}>
                    <Text style={styles.text}>Back</Text>
                </Pressable>
            </View>
        );
    };

    const ComponentA: React.FC<ComponentProps> = ({ setComponent }) => {
        return (
            <View style={styles.componentA}>
                <Pressable style={styles.backButton} onPress={() => setComponent(null)}>
                    <Text style={styles.text}>Back</Text>
                </Pressable>
                <Text>Hauteur</Text>
                <View style={styles.layout}>
                    {hauteurSize.map((size) => (
                        <Pressable onPress={() => { sethauteur(size); }} style={[styles.choices, { backgroundColor: hauteur === size ? "red" : "transparent" }]} key={size}>
                            <Text>{size}</Text>
                        </Pressable >
                    ))}
                </View>
                <Text>Profondeur</Text>
                <View style={styles.layout}>
                    {profondeurSize.map((size) => (
                        <Pressable onPress={() => { setProfondeur(size); }} style={[styles.choices, { backgroundColor: profondeur === size ? "red" : "transparent" }]} key={size}>
                            <Text>{size}</Text>
                        </Pressable >
                    ))}
                </View>
                <Text>Longueur</Text>
                <View style={styles.layout}>
                    {longueurSize.map((size) => (
                        <Pressable onPress={() => { setLongueur(size); }} style={[styles.choices, { backgroundColor: longueur === size ? "red" : "transparent" }]} key={size}>
                            <Text>{size}</Text>
                        </Pressable >
                    ))}
                </View>
            </View>
        );
    };

    const ImportPlans: React.FC<ComponentProps> = ({ setComponent }) => {
        return (
            <View style={{ flex: 1 }}>
                <Pressable style={styles.backButton} onPress={back} >
                    <Text style={styles.text}>Back</Text>
                </Pressable>
                <ScrollView style={{ padding: 20, paddingLeft: 80 }}>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        <Text>long</Text>
                        <Text>width</Text>
                    </View>
                    {kison.map((kison: any) => (

                        <View style={{ justifyContent: "center" }}>

                            <View style={{ flexDirection: "row", gap: 35 }}>
                                <Text>{kison.longueur - 3.2}</Text>
                                <Text>{kison.profondeur}</Text>
                            </View>
                            <View style={{ flexDirection: "row", gap: 35 }}>
                                <Text>{kison.hauteur}</Text>
                                <Text>{kison.profondeur + 5}</Text>
                                <Text>x 2</Text>
                            </View>
                            <View style={{ flexDirection: "row", gap: 35 }}>
                                <Text>{kison.longueur - 3.2}</Text>
                                <Text>10</Text>
                                <Text>x 2</Text>
                            </View>
                        </View>

                    ))}
                </ScrollView>
            </View>
        );
    };


    const Playground = () => {

        return (
            <View style={styles.playground}>
                {/* Conditional rendering based on activeComponent */}
                {activeComponent === "ComponentA" && <ComponentA setComponent={setComponent} />}
                {activeComponent === "ComponentB" && <ComponentB setComponent={setComponent} />}
                {activeComponent === "ComponentC" && <ComponentC setComponent={setComponent} />}
                {activeComponent === "ComponentD" && <ComponentD setComponent={setComponent} />}
                {activeComponent === "ComponentE" && <ComponentE setComponent={setComponent} />}
                {activeComponent === "ComponentF" && <ComponentF setComponent={setComponent} />}
                {activeComponentD === "ImportPlans" && <ImportPlans setComponent={setComponent} />}

                {!activeComponent && !activeComponentD && (
                    <View style={styles.layoutbig}>
                        <Pressable style={styles.choicesbig} onPress={() => setComponent("ComponentA")}>
                            <Text style={styles.text}>C-B</Text>
                        </Pressable>
                        <Pressable style={styles.choicesbig} onPress={() => setComponent("ComponentB")}>
                            <Text style={styles.text}>C-H</Text>
                        </Pressable>
                        <Pressable style={styles.choicesbig} onPress={() => setComponent("ComponentC")}>
                            <Text style={styles.text}>Colum</Text>
                        </Pressable>
                        <Pressable style={styles.choicesbig} onPress={() => setComponent("ComponentD")}>
                            <Text style={styles.text}>Tirwar</Text>
                        </Pressable>
                        <Pressable style={styles.choicesbig} onPress={() => setComponent("ComponentE")}>
                            <Text style={styles.text}>Frigo</Text>
                        </Pressable>
                        <Pressable style={styles.choicesbig} onPress={() => setComponent("ComponentF")}>
                            <Text style={styles.text}>nich</Text>
                        </Pressable>
                    </View>
                )}
                {!activeComponent && !activeComponentD && (<View style={styles.import}>
                    <Pressable onPress={importP} style={styles.importB}><Text style={styles.text}>Import</Text></Pressable>
                </View>)}
                {activeComponent && !activeComponentD && (<View style={styles.import}>
                    <Pressable onPress={celar} onLongPress={importP} style={styles.importB}><Text style={styles.text}>Import</Text></Pressable>
                    <Pressable onPress={add} style={styles.importB}><Text style={styles.text}>ADD</Text></Pressable>
                </View>)}
                {!activeComponent && activeComponentD && (<View style={styles.import}>
                    <Pressable onPress={save} style={styles.save}><Text style={styles.text}>Save</Text></Pressable>
                </View>)}


            </View>
        )
    }



    return (
        <SafeAreaView style={styles.view}>
            <ScrollView  >
                <View style={styles.screen}>
                    {kison.map((kison: any) => (
                        <View style={styles.choicesScreen}>
                            <Text style={styles.textScreen} key={kison.longueur}>{kison.longueur}</Text>
                            <View style={styles.HandP}>
                                <Text key={kison.hauteur} style={styles.HandPtext}>H : {kison.hauteur}</Text>
                                <Text key={kison.profondeur} style={styles.HandPtext}>P : {kison.profondeur}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Playground />
        </SafeAreaView>
    );





};




const styles = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    importB: {
        height: 55,
        width: 150,
        backgroundColor: "lightgreen",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    save: {
        height: 55,
        width: 150,
        backgroundColor: "lightgreen",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    },
    playground: {
        backgroundColor: "rgb(60, 60, 60)",
        width: "100%",
        height: "50%",
        borderRadius: 25,
        justifyContent: "center",
        flexDirection: "column",
        padding: 10,
        gap: 20
    },
    screen: {
        padding: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"

    },
    text: {
        fontSize: 20,
    },
    componentA: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
    },
    import: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    backButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "red",
        borderRadius: 5,
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 2
    },
    choices: {
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 12,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    choicesScreen: {
        paddingTop: 10,
        padding: 3,
        backgroundColor: "green",
        borderRadius: 12,
        margin: 5,
        flexDirection: "column",
        justifyContent: "center",
    },
    textScreen: {
        fontSize: 30,
        textAlign: "center",
        padding: 10
    },

    choicesbig: {
        width: 90,
        height: 90,
        backgroundColor: "red",
        borderRadius: 12,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    layout: {
        flexDirection: "row"
    },
    layoutbig: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        height: "70%"
    },
    HandP: {
        flexDirection: "row",
        gap: 15,
        justifyContent: "center",
        paddingHorizontal: 10,

    },
    HandPtext: {
        fontSize: 13

    }



});

export default Work;
