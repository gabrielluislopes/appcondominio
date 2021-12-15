import React from "react";
import { StyleSheet, View } from "react-native";

const FormRow = (props) => {

    const { children } = props;

    return(
        <View style={styles.container}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 35,
        marginRight: 35,
        height: 50,
    }
});

export default FormRow;