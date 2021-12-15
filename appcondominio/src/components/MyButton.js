import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

const MyButton = (props) => {

    const { children } = props;

    return(
        <View style={styles.container}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 50,
        marginLeft: 35,
        marginRight: 35,
    }
});

export default MyButton;