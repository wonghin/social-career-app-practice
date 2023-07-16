import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    loginTab: undefined
    login: undefined
    Home: undefined

    //Similar Stack screen
    HomeStack: undefined
    TaskStack: undefined


    SuggestionJob: undefined,
    ShortestTimeJob: undefined,



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