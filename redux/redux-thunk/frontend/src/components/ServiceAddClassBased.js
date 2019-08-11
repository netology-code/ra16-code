import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeServiceField, addService } from '../actions/actionCreators';

class ServiceAddClassBased extends Component {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.props.onChange(name, value);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSave();
  }

  render() {
    const {item, loading, error} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name='name' onChange={this.handleChange} value={item.name} />
        <input name='price' onChange={this.handleChange} value={item.price} />
        <button type='submit' disabled={loading}>Save</button>
        {error && <p>Something went wrong try again</p>}
    </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { serviceAdd: {item, loading, error} } = state;
  return { item, loading, error };
};

const mapDispatchToProps = {
  onChange: changeServiceField,
  onSave: addService,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceAddClassBased);
