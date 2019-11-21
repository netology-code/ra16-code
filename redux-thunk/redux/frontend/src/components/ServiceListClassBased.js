import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchServices, removeService } from '../actions/actionCreators';
import { connect } from 'react-redux';

class ServiceListClassBased extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }

  componentDidMount() {
    this.props.fetchServices();
  }

  handleRemove = id => {
    this.props.removeService(id);
  };

  render() {
    const { items, loading, error } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Something went wrong try again</p>;
    }

    return (
      <ul>
        {items.map(o => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => this.handleRemove(o.id)}>✕</button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const { serviceList: { items, loading, error } } = state;
  return { items, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchServices: () => fetchServices(dispatch),
    removeService: id => dispatch(removeService(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);
