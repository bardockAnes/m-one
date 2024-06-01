import { StyleSheet } from "react-native";


// rgb(4, 176, 219) blue light 
export const maincolor = '#1c768f'
export const nocolor = 'transparent'
export const whitecrem = '#fbf3f2'
const white = "rgb(250,250,250)"
const dark = "rgb(1,1,1)"
const darkblue = '#032539'
export const ornge = 'rgb(250, 153, 28)'
const fontnew = ""
const playgroundtext = darkblue
const hautetbas = 'rgba(250,250,250,0.1)'
const colonne = 'rgba(250,250,250,0.1)'
const calculatebutton = ornge
const playgroundcolor = darkblue
const playgroundfont = fontnew
const backButton = ornge
const sizes = whitecrem
const sected = maincolor

export const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: darkblue,
    },
    componentA: {
        borderRadius: 10,
        justifyContent: "flex-end",
        alignItems: "center",
        height: "80%",
        paddingBottom: 15

    },
    backButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        // backgroundColor: backButton,
        borderRadius: 5,
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
    },
    rightTitle: {
        backgroundColor: maincolor,
        borderRadius: 5,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft: 30
    },
    selectedChoice: {
        borderColor: sected,
        backgroundColor: sected
    },

    choices: {
        width: 50,
        height: 50,
        borderRadius: 12,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: playgroundcolor

    },
    layout: {
        flexDirection: "row",
    },
    importB: {
        height: 55,
        width: 150,
        backgroundColor: backButton,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    import: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        height: "20%"
    },
    size: {
        color: sizes,
        padding: 2,
    },
    sizeT: {
        color: sizes,
        marginTop: 10,
    }

});


export const stylesPlay = StyleSheet.create({
    importButton: {
        height: 55,
        width: "70%",
        backgroundColor: calculatebutton,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    saveButton: {
        height: 55,
        width: 150,
        backgroundColor: "black",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    },
    playground: {
        backgroundColor: playgroundcolor,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        width: "100%",
        height: "50%",
        justifyContent: "center",
        flexDirection: "column",
    },
    layoutBig: {
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        height: "80%",
    },
    choiceBig: {
        width: 100,
        height: 100,
        backgroundColor: hautetbas,
        borderRadius: 12,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    choiceBigColumn: {
        width: 100,
        height: 210,
        backgroundColor: colonne,
        borderRadius: 12,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        textAlign: "center",
        color: playgroundtext,
        fontFamily: playgroundfont,
    },
    importContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: "20%"
    },
    head: { height: 30, backgroundColor: '#f1f8ff'},
    text: { margin: 6 },
});



