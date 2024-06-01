import React, { useEffect, useState } from "react";
import { ScrollView, Pressable, View, StyleSheet } from "react-native";
import { useWorkContext } from "@/providers/WorkContext";
import { maincolor, stylesPlay, styles, whitecrem, ornge, nocolor } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { DataTable, Button, Text } from 'react-native-paper';
import Papa from 'papaparse';


export const ExportCSV: React.FC<{ setComponent: (component: string | null) => void }> = ({ setComponent }) => {
    const { back, save, csvContent } = useWorkContext();
    const [tableData, setTableData] = useState<string[][]>([]);
    const [tableHead, setTableHead] = useState<string[]>([]);

    useEffect(() => {
        if (csvContent) {
            // Parse the CSV content
            const parsedData = Papa.parse(csvContent, {
                header: true,
                skipEmptyLines: true
            });

            if (parsedData.data.length > 0) {
                // Set table head as the keys of the first object
                setTableHead(parsedData.meta.fields || []);
                // Set table data as the array of values
                setTableData(parsedData.data.map((row: any) => Object.values(row)));
            }
        }
    }, [csvContent]);

    return (
        <View style={{ flex: 1 }}>
            <Pressable style={styles.backButton} onPress={back}>
                <Ionicons name="arrow-back-circle" size={40} color={ornge} />
            </Pressable>
            <View style={{ height: "80%", padding: 10, alignItems: "center", paddingTop: "12%", flexDirection: "row" }}>
                <ScrollView horizontal contentContainerStyle={{ height: "70%", width: "100%" }}>
                    <DataTable>
                        <DataTable.Header style={{ borderColor: whitecrem }}>
                            {tableHead.map((header, index) => (
                                <DataTable.Title key={index} >
                                    <Text style={{ color: ornge }}>
                                        {header}
                                    </Text>
                                </DataTable.Title>
                            ))}
                        </DataTable.Header>
                        <ScrollView>
                            {tableData.map((row, rowIndex) => (
                                <DataTable.Row key={rowIndex} style={{borderColor:whitecrem}}>
                                    {row.map((cell, cellIndex) => (
                                        <DataTable.Cell key={cellIndex} >
                                            <Text style={{ color: whitecrem, fontSize: 12, marginRight: 10, marginBottom: 5 }}>
                                                {cell}
                                            </Text>
                                        </DataTable.Cell>
                                    ))}
                                </DataTable.Row>
                            ))}
                        </ScrollView>
                    </DataTable>
                </ScrollView>
            </View>
            <View style={stylesPlay.importContainer}>
                <Pressable onPress={save} style={stylesPlay.importButton}>
                    <Text style={stylesPlay.buttonText}>Exporter</Text>
                </Pressable>
            </View>
        </View>
    );
};
