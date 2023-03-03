import axios from "axios";
import { useEffect, useState } from "react";
import {
	View,
	Text,
	Button,
	SafeAreaView,
	FlatList,
	Platform,
} from "react-native";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";

export default function ListScreen() {
	const [bookings, setBookings] = useState<BookingEntity[]>();

	// const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2";

	const fetchBookings = async () => {
		axios
			.get("https://4917-5-179-80-205.eu.ngrok.io/bookings")
			.then((response) => {
				console.log(response.data);
				setBookings(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchBookings();
	}, []);

	return (
		<View>
			<Text>This is the list Screen</Text>
			<SafeAreaView>
				<FlatList
					data={bookings}
					renderItem={({ item }: { item: BookingEntity }) => (
						<Booking booking={item} fetchBookings={fetchBookings} />
					)}
					keyExtractor={(item) => "" + item.id}
				/>
			</SafeAreaView>
		</View>
	);
}
