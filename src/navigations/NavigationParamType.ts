import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    login: undefined
    Home: undefined
    Restaurant: undefined
    RestaurantDetails: undefined
    Settings: undefined


    HomeNavigation: undefined;

};

export type NavigationScreenProps = StackNavigationProp<RootStackParamList>

export type Navigation = StackScreenProps<RootStackParamList>;

// type RootBottomTabParamList = {
//     Home: undefined;
// }