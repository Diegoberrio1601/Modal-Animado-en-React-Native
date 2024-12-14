import { StyleSheet, Animated, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";

export const Modal = ({
  visibility = true,
  dismissable = true,
  setVisibility,
  children,
}) => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  const maxHeight = height - (height * 30) / 100;
  const maxWidth = "85%";

  const backgroundColor = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const handleAnimated = () => {
    Animated.parallel([
      Animated.timing(backgroundColor, {
        toValue: visibility ? 1 : 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(translateY, {
        toValue: visibility ? 1 : 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    handleAnimated();
  }, [visibility]);

  const backgroundColorStyles = {
    backgroundColor: backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(0,0,0,0)", "rgba(0,0,0,0.3)"],
      extrapolate: "clamp",
    }),
  };
  const translateYStyles = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [0, 1],
          outputRange: [height, 0],
          extrapolate: "clamp",
        }),
      },
      {
        scale: translateY.interpolate({
          inputRange: [0, 0.8, 1],
          outputRange: [1, 1.5, 1],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  return (
    <>
      <Animated.View
        pointerEvents={visibility ? "auto" : "none"}
        onTouchStart={
          dismissable
            ? () => {
                setVisibility(false);
              }
            : () => {}
        }
        style={[styles.container, { height, width }, backgroundColorStyles]}
      />
      <Animated.View
        style={[
          styles.modal,
          { maxHeight: maxHeight, width: maxWidth },
          translateYStyles,
        ]}
      >
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 0,
  },
  modal: {
    height: "auto",
    position: "absolute",
    zIndex: 10,
    overflow: "hidden",
    borderRadius: 2,
  },
});
