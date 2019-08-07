import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Searchbar from '../../Searchbar/Searchbar.component';
import styles from './Home.component.style';
import PropTypes from 'prop-types';
import NewsCard from '../../Cards/News/NewsCard.component.js';
import NavigationService from '../../../routes/NavigationService.js';
import Subheader from '../../Subheader/Subheader.component';

export default class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  _goToDetail = (item) => { 
    NavigationService.navigate('Detail', {
      news:item}
    ); 
  }

  _renderNewsList = () => {
    var content = null;
    if(this.props.news){
      content = (
         <FlatList 
        data={this.props.news}
        renderItem={({item}) => 
            <NewsCard 
            id={item.source && item.source.id ? item.source.id : null}
            title={item.title ? item.title : null} 
            subtitle={item.author} 
            action={() => {NavigationService.navigate('Detail', {news:item}); }}
            actionImage={() => {NavigationService.navigate('Detail', {news:item}); }}
            image={item.urlToImage}
            />
        }
        keyExtractor={(item, index) => index.toString()}
        />
      );
    }
    else{
      content = (
        <Text>
          Silakan ketik untuk mencari berita
        </Text>
      );
    }
    return content;
  }

  render() {
    return (
      <View>
        <Subheader title="NEWS" />
  	    <Searchbar 
        query={this.props.searchQuery} 
        onChangeText={this.props.onChangeSearchQuery}
        />
        <View style={styles.container}>
          {this._renderNewsList()}
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  news: PropTypes.array,
  onChangeSearchQuery: PropTypes.func,
  searchQuery: PropTypes.string,
  modal: PropTypes.bool,
  getNews: PropTypes.func
};