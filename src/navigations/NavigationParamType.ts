import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    login: undefined
    Home: undefined
    HomeStack: undefined



    Search: undefined
    RestaurantDetails: undefined
    Settings: undefined

    Schedule: undefined


    HomeNavigation: undefined;

};

export type NavigationScreenProps = StackNavigationProp<RootStackParamList>

export type Navigation = StackScreenProps<RootStackParamList>;

// type RootBottomTabParamList = {
//     Home: undefined;
// }