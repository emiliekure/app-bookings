import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomTabs from "./components/BottomTabs";

export default function App() {
	return (
		<NavigationContainer>
			<BottomTabs></BottomTabs>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
