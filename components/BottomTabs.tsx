import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScreenStack from "./ListScreenStack";
import CreateScreen from "../screens/CreateScreen";

// export type TabMain = {
// 	List: undefined;
// 	Create: { fetchBookings: () => void };
// };

const Tab = createBottomTabNavigator();

export default function BottomTabs(props: any) {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen name="List" component={ListScreenStack} />
			<Tab.Screen name="Create" component={CreateScreen} />
		</Tab.Navigator>
	);
}
