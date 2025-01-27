import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Categories from "../screens/Categories";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
};

export default TabRoutes;