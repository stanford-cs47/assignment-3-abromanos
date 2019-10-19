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
import { StyleSheet, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'
import { AntDesign } from '@expo/vector-icons';


export default class Search extends Component {

  render () {
    return (
      <View style={styles.searchBar}> 
        <TextInput
          value={this.props.searchText}
          placeholder='Search for News'
          onChangeText={text => this.props.onChangeText(text)}
          onSubmitEditing={()=> this.props.onSubmitText()}
        />
        <View style={{alignSelf: 'flex-end'}}>
          <TouchableOpacity onPress={() => this.props.onSubmitText()}>
            <AntDesign
              style={styles.searchIcon}
              name='search1'
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    width: 0.9 * Metrics.screenWidth,
    height: 40,
    backgroundColor: '#E8E8E8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  searchIcon: {
    width: Metrics.icons.small,
    height: Metrics.icons.small,
    bottom: 10,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    left: 0.55 * Metrics.screenWidth,

  },
});
