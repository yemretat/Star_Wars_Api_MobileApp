import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TabButton from "../TabButton"

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.bottomNav}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = //reading the label
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index; 

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        // No need to long Press

        // const onLongPress = () => {
        //   navigation.emit({
        //     type: 'tabLongPress',
        //     target: route.key,
        //   });
        // };
        return (
        //   <TouchableOpacity
        //     key={index}
        //     // accessibilityRole="button"
        //     // accessibilityState={isFocused ? { selected: true } : {}}
        //     // accessibilityLabel={options.tabBarAccessibilityLabel}
        //     // testID={options.tabBarTestID}
        //     onPress={onPress}
        //   >
        //     <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
        //       {label}
        //     </Text>
        //   </TouchableOpacity>
            <View key={index}>
            <TabButton onPress={onPress} />
            </View>
      
        );
      })}
    </View>
  );
}
export default MyTabBar