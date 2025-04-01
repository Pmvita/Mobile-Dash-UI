import { FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function HomeScreen() {
  const [selectedChart, setSelectedChart] = useState('Users');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Overview</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
        {/* Box container */}
        <View style={styles.box}> 
          <TouchableOpacity style={styles.gridContainer}>
            <View style={styles.gridHeader}>
              <Text style={styles.gridText}>Views</Text>
              <Ionicons name="trending-up-outline" size={17} color="black"/>
            </View>
            <Text style={styles.count}>5,124</Text>
            <Text style={styles.percent}>12.5%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridContainer}>
            <View style={styles.gridHeader}>
              <Text style={styles.gridText}>Visits</Text>
              <Ionicons name="trending-up-outline" size={17} color="black" /> 
            </View>
            <Text style={styles.count}>463</Text>
            <Text style={styles.percent}>8.5%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridContainer}>
            <View style={styles.gridHeader}>
              <Text style={styles.gridText}>New Users</Text>
              <Ionicons name="trending-up-outline" size={17} color="black" />
            </View>
            <Text style={styles.count}>2567</Text>
            <Text style={styles.percent}>34.2%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridContainer}>
            <View style={styles.gridHeader}>
              <Text style={styles.gridText}>Active Users</Text>
              <Ionicons name="trending-up-outline" size={17} color="black" />
            </View>
            <Text style={styles.count}>864</Text>
            <Text style={styles.percent}>21.5%</Text>
          </TouchableOpacity>
        </View>

        {/* Performance Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Performance Chart</Text>
          <View style={styles.chartTabs}>
            {['Users', 'Incidents', 'Operating Status'].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setSelectedChart(tab)}
                style={[
                  styles.chartTab,
                  selectedChart === tab && styles.activeChartTab,
                ]}
              >
                <Text style={[styles.chartTabText, selectedChart === tab && styles.activeChartTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.chartPlaceholder}>
            <Text>{selectedChart} Chart</Text>
          </View>
        </View>

        {/* Device Traffic Bar Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Device Traffic</Text>
          <BarChart
            data={{
              labels: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'],
              datasets: [
                {
                  data: [120, 220, 350, 400, 310, 150], // Example data
                },
              ],
            }}
            width={Dimensions.get('window').width - 40} // Responsive width
            height={200}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              barPercentage: 0.6,
            }}
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>

        {/* Location Traffic Bar Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Location Traffic</Text>
          <BarChart
            data={{
              labels: ['US', 'Canada', 'Mexico', 'China', 'London', 'Japan', 'Australia'],
              datasets: [
                {
                  data: [800, 500, 300, 400, 600, 450, 700], // Example data
                },
              ],
            }}
            width={Dimensions.get('window').width - 40} // Responsive width
            height={200}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Change color to distinguish from device traffic chart
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              barPercentage: 0.6,
            }}
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center', 
    margin: 10,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  gridContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    width: '48%', // Adjust width to fit two items per row
    marginBottom: 5,
    marginTop: 5,
  },
  gridHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'transparent',
  },
  gridText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
  },
  percent: {
    fontSize: 12,
    marginTop: 5, // Add spacing below the icon
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
  },
  chartTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  chartTab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  activeChartTab: {
    backgroundColor: 'lightblue',
  },
  chartTabText: {
    fontSize: 14,
    color: 'black',
  },
  activeChartTabText: {
    color: 'black',
  },
  chartPlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});