/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, Keyboard, TouchableWithoutFeedback, Linking, ActivityIndicator} from 'react-native';
import { Images, Colors, Metrics} from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'
import images from './App/Themes/Images';


export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  componentDidMount() {
    this.loadArticles();
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  onChangeText = text => {
    this.setState({searchText: text});
  }
  
  onSubmitText = () => {
    this.loadArticles(this.state.searchText);

  }

  render() {
    const {articles, loading} = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
        
          <Image style={styles.nytLogo} source={images.logo}/>
          <View style={{flexDirection: 'row'}}>
            <Search 
              searchText={this.state.searchText}
              onChangeText={this.onChangeText}
              onSubmitText={this.onSubmitText}
            />
          </View>
          <View style={styles.articleContent}>
            <News articles={articles}/>
          </View>
        
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  nytLogo: {
    marginHorizontal: Metrics.marginHorizontal,
    marginVertical: Metrics.marginVertical,
    width: Metrics.screenWidth,
    height: Metrics.images.large,
    flexDirection: 'row',

  },
  articleContent: {
    flex: 4,
  },
});
