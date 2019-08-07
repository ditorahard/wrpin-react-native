import React from 'react';
import DetailScreen from '../../components/Screens/Detail/Detail.component';
import NavigationService from '../../routes/NavigationService';

export default class Detail extends React.PureComponent {

  render() {
    return (
      <DetailScreen
        newsDetail={this.props.navigation.getParam('news', 'NO-NEWS')}
       />
    );
  }
}