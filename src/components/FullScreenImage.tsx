import { Image, Pressable, StyleSheet } from "react-native";

import { BlurView } from "expo-blur";
import React from "react";

type FullScreenImageProps = {
  url?: string | null;
  onClose: () => void;
};

export const FullScreenImage = ({ url, onClose }: FullScreenImageProps) => {
  if (!url) {
    return null;
  }

  return (
    <Pressable onPress={onClose} style={StyleSheet.absoluteFill}>
      <BlurView
        style={{
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Image
          source={{ uri: url }}
          style={{ width: "100%", aspectRatio: 16 / 9 }}
        />
      </BlurView>
    </Pressable>
  );
};
