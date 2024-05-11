import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Appbar,
  Card,
  Title,
  Button,
  ProgressBar,
  IconButton,
  RadioButton,
  Icon,
  Text,
} from "react-native-paper";
import Colors from "../config/Colors";
// import { LineChart } from "react-native-svg-charts";
import FontSize from "../config/FontSize";
// import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";
// import ListIcon from "react-native-paper/lib/typescript/components/List/ListIcon";

const HomeScreen = () => {
//   const data = [
//     { x: 0, y: 10 },
//     { x: 1, y: 15 },
//     { x: 2, y: 20 },
//     { x: 3, y: 25 },
//     { x: 4, y: 30 },
//   ];
  const userName = "Joe";
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <Appbar.Header
        style={{ justifyContent: "space-between", flexDirection: "row" }}
      >
        <Appbar.Content
          title={`Welcome ${userName}`}
          style={styles.appbarContent}
        />
        {/* <MaterialCommunityIcons name="brain" size={30} color={Colors.background} /> */}
        <MaterialCommunityIcons
          name="bell"
          size={30}
          color={Colors.background}
        />
        {/* </View> */}
      </Appbar.Header>

      {/* <View style={styles.graphContainer}>
        <LineChart
          style={styles.chart}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ stroke: "rgb(134, 65, 244)" }}
        />
      </View> */}

      {/* Card with General Cognitive Text */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>General Cognitive Test</Title>
          <View style={styles.cardTextContainer2}>
            <Title style={styles.cardText}></Title>
          </View>
          <Button mode="contained" onPress={() => console.log("Start Test")}>
            Start Test
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.cardd}>
        <Card.Content style={{ justifyContent: "center" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialCommunityIcons
              name="alphabetical-variant"
              size={40}
              color={Colors.white}
            />
            <MaterialCommunityIcons
              name="brain"
              size={40}
              color={Colors.white}
            />
          </View>
          <Text style={{ color: Colors.white, fontSize: FontSize.large }}>
            Daily Crosswordd
          </Text>
        </Card.Content>
      </Card>

      {/* Add more cards or components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cardTextContainer2: {
    alignItems: "center",
  },
  progressBar: {
    height: 10,
  },
  graphContainer: {
    height: 200,
    marginHorizontal: 16,
    marginVertical: 20,
    width: "80%",
  },
  graph: {
    flex: 1,
  },
  card: {
    margin: 20,
  },
  cardd: {
    margin: 20,
    backgroundColor: Colors.background,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTextContainer: {
    marginVertical: 10,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 24,
  },
  appbarContent: {
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default HomeScreen;
