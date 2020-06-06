
import React from 'react';
import ErrorPage from './ErrorPage';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
        error,
        errorInfo,
      });
    
  }

  handlePageRefresh = () => {
    this.setState({
      hasError: false,
    });
    this.props.history.replace(this.props.location.pathname);
  }

  render() {
    return this.state.hasError ? <ErrorPage pageRefresh={this.handlePageRefresh} /> : this.props.children;
  }
}
export default withRouter(ErrorBoundary);

ErrorBoundary.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  children: PropTypes.object,
};
