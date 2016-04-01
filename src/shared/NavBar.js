import React, { Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class NavBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '/home'
    }
  }

  _handleTabsChange(value) {
    this.context.router.push(value);
  }

  componentWillMount() {
    this.setState({
      value: this._getSelectdIndex()
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: this._getSelectdIndex()
    });
  }

  _getSelectdIndex() {
    return this.context.router.isActive('/home') ? '/home':
      this.context.router.isActive('/account') ? '/account':
      this.context.router.isActive('/about') ? '/about' : '/home';
  }

  render() {
    let styles = {
      tabs: {
        width: '390px',
        position: 'absolute',
        right: '6px',
        textTransform: 'uppercase'
      },
      tab: {
        height: '64px',
        color: '#fff'
      },
      inkBar: {
        height: '4px',
        marginTop: '-4px'
      }
    };
    return(
      <div className="app-header">
        <Tabs style={styles.tabs} 
              tabItemContainerStyle={{backgroundColor: 'transparent'}} 
              inkBarStyle={styles.inkBar}
              onChange={this._handleTabsChange.bind(this)}
              value={this.state.value} >
          <Tab style={styles.tab} value="/home" label="Home" />
          <Tab style={styles.tab} value="/account" label="Accout" />
          <Tab style={styles.tab} value="/about" label="About" />
        </Tabs>
      </div>
    );
  }
};

NavBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NavBar;