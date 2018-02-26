import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import VideoItem from './components/videoItem';
import data from './components/data.json';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navBar}>
              <Image source = {require('./Images/youtube.png')} style={{width:90, height:20}}/>
              <View style = {styles.rightNav}>
                <TouchableOpacity>
                    <Icon style={styles.navItem} name="search" size={25}  />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.navItem} name="account-circle" size={25}  />
                </TouchableOpacity>
              </View>
          </View>{/*Navbar*/}

          <View style={styles.body}>
            <VideoItem video={data.items[0]}/>
          </View>{/*Body*/}

          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem}>
                <Icon name="home" size={25}/>
                <Text style= {styles.tabTitle}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
                <Icon name="whatshot" size={25}/>
                <Text style= {styles.tabTitle}>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
                <Icon name="subscriptions" size={25}/>
                <Text style= {styles.tabTitle}>Subscriptions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
                <Icon name="folder" size={25}/>
                <Text style= {styles.tabTitle}>Library</Text>
            </TouchableOpacity>
          </View>{/*tabBar*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    navBar: {
      height: 60,
      backgroundColor: 'white',
      elevation: 3,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  rightNav:{
    flexDirection: 'row'
  },
  navItem:{
    marginLeft: 20
  },
  body:{
    flex:1
  },
  tabBar:{
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItem:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle:{
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4
  }
});
