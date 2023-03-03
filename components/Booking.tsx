import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BookingEntity } from "../entities/BookingEntity";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackMain } from "./ListScreenStack";

type bookingScreenProp = StackNavigationProp<StackMain, "Edit">;

export default function Booking({
	booking,
	fetchBookings,
}: {
	booking: BookingEntity;
	fetchBookings: () => void;
}) {
	const navigation = useNavigation<bookingScreenProp>();

	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("Edit", { booking, fetchBookings })
			}
		>
			<View>
				<Text>{booking.name}</Text>
				<Text>{booking.phone}</Text>
			</View>
		</TouchableOpacity>
	);
}
