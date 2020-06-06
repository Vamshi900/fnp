import React from 'react';
import PropTypes from 'prop-types';

class ErrorPage extends React.Component {
    render() {
        return <div className='ErrorPage' >
            <div className='OopsClass'>Oops!</div>
            <div className='SwwClass'>Something went wrong</div>
            <button appearance="contained" text ={'REFRESH PAGE'} onClick={() => this.props.pageRefresh()} />
        </div>;
    }
}
//test

export default ErrorPage;

ErrorPage.propTypes = {
    pageRefresh: PropTypes.func,
};
