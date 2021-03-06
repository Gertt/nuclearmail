/** @flow */

var React = require('react/addons');
var clamp = require('../helpers/clamp');

var PropTypes = React.PropTypes;
var PureRenderMixin = React.addons.PureRenderMixin;

var ThreadView = React.createClass({
  propTypes: {
    lines: PropTypes.number.isRequired
  },

  mixins: [PureRenderMixin],

  componentDidMount() {
    clamp(this.refs.content.getDOMNode(), {clamp: this.props.lines});
  },

  render(): any {
    return (
      <div className={this.props.className} ref="content">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ThreadView;
