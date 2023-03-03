import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { BookingEntity } from "../entities/BookingEntity";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackMain } from "../components/ListScreenStack";

type editScreenProp = StackNavigationProp<StackMain, "List">;

export default function EditScreen(props: any) {
	const booking: BookingEntity = props.route.params.booking;
	const fetchBookings: () => void = props.route.params.fetchBookings;
	const [name, setName] = useState(props.route.params.booking.name);
	const [numberOf, setNumberOf] = useState(
		props.route.params.booking.numberOfPeople
	);
	const [phone, setPhone] = useState(props.route.params.booking.phone);
	const [email, setEmail] = useState(props.route.params.booking.email);
	const [comment, setComment] = useState(props.route.params.booking.comment);
	// const [date, setDate] = useState(props.route.params.booking.date);
	const navigation = useNavigation<editScreenProp>();

	const editBooking = async () => {
		axios
			.put(
				`https://4917-5-179-80-205.eu.ngrok.io/bookings/${booking.id}`,
				{
					name: name,
					numberOfPeople: numberOf,
					phone: phone,
					email: email,
					comment: comment,
				}
			)
			.then((response) => {
				console.log(response.data);
				fetchBookings();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const deleteBooking = async () => {
		axios
			.delete(`https://4917-5-179-80-205.eu.ngrok.io/bookings/${booking.id}`)
			.then((response) => {
				console.log(response.data);
				fetchBookings();
				navigation.navigate("List");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<View>
			<SafeAreaView>
				<TextInput onChangeText={(text) => setName(text)}>
					{name}
				</TextInput>
				<TextInput onChangeText={(text) => setNumberOf(text)}>
					{numberOf}
				</TextInput>
				<TextInput onChangeText={(text) => setPhone(text)}>
					{phone}
				</TextInput>
				<TextInput onChangeText={(text) => setEmail(text)}>
					{email}
				</TextInput>
				<TextInput onChangeText={(text) => setComment(text)}>
					{comment}
				</TextInput>

				<Button onPress={() => editBooking()} title="Update" />
				<Button onPress={() => deleteBooking()} title="Delete" />
			</SafeAreaView>
		</View>
	);
}
