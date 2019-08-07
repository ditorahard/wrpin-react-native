import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from '../../components/Screens/Home/Home.component';
import * as action from '../../redux/actions/home/home.actions';
import {connect} from 'react-redux';
import NavigationService from '../../routes/NavigationService';

export class Home extends React.PureComponent {
 	constructor(props) {
    super(props)
  }
  
  searchNews = (event) => {
    this.props.onChangeSearchQuery(event); 
    this.props.getNews(event,1);
  }
  
  render() {
    return (
      <HomeScreen 
      news={this.props.news} 
      onChangeSearchQuery={this.searchNews} 
      searchQuery={this.props.searchQuery}
      getNews={this.props.getNews}
      />
    );
  }
}


const mapStateToProps = (state) => ({
  news: state.home.news,
  searchQuery: state.home.searchQuery,
});

const mapDispatchToProps = (dispatch) => {
	return{
    getNews: (searchQuery, page) => dispatch(action.getNews(searchQuery, page)),
    onChangeSearchQuery: () => dispatch(action.onChangeSearchQuery()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);