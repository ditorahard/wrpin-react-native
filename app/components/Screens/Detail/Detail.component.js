import React from 'react';
import {View, Text, Image, Linking, TouchableHighlight} from 'react-native';
import {Spinner, Container, Content} from 'native-base';
import PropTypes from 'prop-types';
import styles from './Detail.component.style';
import moment from 'moment';

export default class DetailScreen extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  
  _renderNewsDetail = () => {
  	let content = null;
  	if(this.props.newsDetail){
  		content = (
  			<View>
          <Image
            style={styles.imageDetail}
            source={{uri: this.props.newsDetail.urlToImage}}
          />
	  			<Text style={styles.title}>
            {this.props.newsDetail.title}
          </Text>
	  			<Text style={styles.publishedAt}>
            {moment(this.props.newsDetail.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
          </Text>
	  			<Text style={styles.description}>
            {this.props.newsDetail.description}
          </Text>
          <TouchableHighlight onPress={()=>{Linking.openURL(this.props.newsDetail.url)}}>
  	  			<Text style={styles.url}>
              {this.props.newsDetail.url}
            </Text>
          </TouchableHighlight>
  			</View>
  		)
  	}
    else{
      content=(
        <Spinner />
      )
    }
  	return content;
  }

  render() {
  	return (
      <Container style={styles.container}>
        <Content>
      	{this._renderNewsDetail()}
        </Content>
      </Container>
    );
  }
}

DetailScreen.propTypes = {
  newsDetail: PropTypes.object
};