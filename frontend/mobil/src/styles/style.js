import { StyleSheet } from 'react-native';

export const chatStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    chatBox: {
        flex: 1,
        marginBottom: 10,
    },
    chatMessage: {
        padding: 10,
        backgroundColor: "#f0f0f0",
        marginVertical: 5,
        borderRadius: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

// Ek stilleri de dahil edelim (Önceki App.js dosyanızda yerel stiller vardı)
export const messageStyles = StyleSheet.create({
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#d1e7dd', 
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#e9e9eb',
    },
});