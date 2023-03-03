import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { BookingEntity } from "../entities/BookingEntity";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateScreen(props: any) {
	// const fetchBookings: () => void = props.route.params.fetchBookings;
	const [name, setName] = useState("");
	const [numberOf, setNumberOf] = useState("");
	const [date, setDate] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");
	// const [date, setDate] = useState(props.route.params.booking.date);

	const createBooking = async () => {
		axios
			.post(`https://4917-5-179-80-205.eu.ngrok.io/bookings/`, {
				name: name,
				numberOfPeople: numberOf,
				phone: phone,
				email: email,
				date: date,
				comment: comment,
			})
			.then((response) => {
				console.log(response.data);
				// fetchBookings();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<View>
			<SafeAreaView>
				<TextInput onChangeText={(text) => setName(text)}>
					{name}
				</TextInput>
				<TextInput onChangeText={(text) => setNumberOf(text)}>
					{numberOf}
				</TextInput>
				<TextInput onChangeText={(text) => setDate(text)}>
					{date}
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

				<Button onPress={() => createBooking()} title="Create" />
			</SafeAreaView>
		</View>
	);
}
