import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="signin/index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="register/index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="register/knowyou"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
