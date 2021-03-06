import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AppView extends Component {
  state = {
    style: 'light'
  };

  handleColorChange = () =>
    this.setState({ style: this.state.style === 'light' ? 'dark' : 'light' });

  renderChild() {
    const { children } = this.props;
    const { style } = this.state;

    return React.Children.map(children.props.children, child =>
      React.cloneElement(child, {
        component: child.props.component({ style })
      })
    );
  }

  render() {
    const { style } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to={`/`}>Homepage</Link>
            </li>
            <li>
              <Link to={`/first-page`}>First page</Link>
            </li>
          </ul>
          <button className={'button'} onClick={this.handleColorChange}>
            {style}
          </button>
        </header>
        <div className={'App-content'}>{this.renderChild()}</div>
      </div>
    );
  }
}

AppView.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppView;
