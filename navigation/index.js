import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator';

const MainNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(initAuthentication());
  }, []);

  return (
    <NavigationContainer>

        <TabNavigator />

    </NavigationContainer>
  );
};

export default MainNavigator;