import { View, Pressable, Text, DimensionValue } from "react-native";

interface NeuButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  width?: DimensionValue;
  color?: string;
}

export const NeuButton = ({ onPress, children, width = "100%", color = "#ffffff" }: NeuButtonProps) => {
  return (
    <View style={{ position: "relative", width }}>
      {/* Shadow Element */}
      <View
        style={{
          position: "absolute",
          top: 5,
          left: 5,
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          borderRadius: 12,
          zIndex: 1,
        }}
      />
      {/* Button Element */}
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({
          backgroundColor: color,
          paddingVertical: 16,
          paddingHorizontal: 16,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "#000000",
          transform: pressed ? [
            { translateX: 3 },
            { translateY: 3 }
          ] : [],
          zIndex: 2,
          shadowColor: "#000000",
          shadowOffset: {
            width: pressed ? 2 : 5,
            height: pressed ? 2 : 5,
          },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: pressed ? 2 : 5,
        })}
      >
        {children}
      </Pressable>
    </View>
  );
};
