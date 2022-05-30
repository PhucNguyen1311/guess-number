import { Pressable, Text, View, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {}

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedItem]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // ensure any inside effect will be inside
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",

    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressedItem: {
    opacity: 0.7,
  },
});
