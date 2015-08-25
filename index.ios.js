'use strict';

var React = require('react-native');
var SearchWelcome = require('./SearchPage');

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchWelcome,
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
