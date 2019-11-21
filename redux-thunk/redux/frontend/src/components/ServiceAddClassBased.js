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

  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onChange(name, value);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSave(this.props.item.name, this.props.item.price);
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (name, value) => changeServiceField(name, value),
    onSave: (name, price) => addService(dispatch, name, price)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceAddClassBased);
