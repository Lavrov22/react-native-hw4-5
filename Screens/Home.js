import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsScreen from "./PostsScreen";
import MapScreen from "./MapScreen"
import CommentsScreen from "./CommentsScreen"

const NestedScreen = createNativeStackNavigator();

export default function Home() {

    return (
        <NestedScreen.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 83,
                    paddingHorizontal: 81,
                },
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 17,
                    fontFamily: "Roboto-Medium",
                    lineHeight: 22,
                    color: "#212121",
        
                }
            }
}>
            <NestedScreen.Screen
                options={{
                     headerTitle: "Публикации",
                }}
                name="PostsScreen"
                component={PostsScreen}
            />
            <NestedScreen.Screen
                 options={{
                     headerTitle: "Комментарии",
                }}
                name="Comments" component={CommentsScreen} />
            <NestedScreen.Screen
                 options={{
                     headerTitle: "Карта",
                }}
                name="MapScreen" component={MapScreen} />
        </NestedScreen.Navigator>
    )
}