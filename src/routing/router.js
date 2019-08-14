import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import CoinsTypes from '../modules/CoinsTypes/CoinsTypes.component'

const HomeNavigator=createStackNavigator({
	Home: {screen: CoinsTypes, navigationOptions: ({ navigation }) => ({
      title: "Coins Types",
    })}
})

const drawerScreens = createDrawerNavigator(
	{
		Home: {screen:HomeNavigator,navigationOptions:{drawerLabel:'Coins Types'}}
	},
	{
		initialRouteName: 'Home'
	}
)

const Navigation = createAppContainer(drawerScreens);

export default Navigation