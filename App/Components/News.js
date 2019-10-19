/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, TouchableOpacity } from 'react-native'
import { material } from 'react-native-typography' 
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  //you can change the props above to whatever you want/need.

  render () {
    const {articles} = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.articles}
          renderItem={({ item }) => (
            <View style={{margin: 20 }}> 
              <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                <Text style={material.headline}>{item.title}</Text>
                <Text style={material.body1}>{item.snippet}</Text>
                <Text style={material.button}>{item.byline}</Text>
                <Text style={material.caption}>{item.date}</Text>
                </TouchableOpacity>
            </View> 
          )}
          keyExtractor={item => item.url}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

  },
});
