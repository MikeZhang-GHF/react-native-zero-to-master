# react-native-zero-to-master

#### Use Expo to create a React Native App
##### Install Expo CLI
```bash
npm install -g expo-cli
``` 
```bash
expo init myapp
``` 

#### Core Components of React Native
> View, Text, Image, Button, TextInput, ScrollView, StyleSheet, FlatList, SectionList, ActivityIndicator, Alert, Modal, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Switch, Picker, Slider, StatusBar, WebView
> View like <div> in HTML, holding other components
> Text like <p> in HTML, holding text

#### App Template
> StyleSheet.create() to create a stylesheet object to hold styles for components

```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	return (
    <View style={styles.AppContainer}>
      <View>
        <TextInput placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
	);
}

const styles = StyleSheet.create({
	AppContainer: {
    padding: 50,
	},
});
```

#### Flexbox
> - Layouts are created with Flexbox
> - Flexbox is designed to provide a consistent layout on different screen sizes
> - Main Axis and Cross Axis

- View is a flexbox container by default
> View as container used as a layout tool, it should be used as much as possible to wrap other components

- FlatList
> FlatList is better than ScrollView when dealing with a list of data 
