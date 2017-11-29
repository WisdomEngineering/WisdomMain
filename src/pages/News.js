import React from 'react';
import {connect} from 'react-redux';

//component imports
import SiteNav from '../components/SiteNav';
import SocialShare from '../components/SocialShare';
import Footer from '../components/Footer';

class News extends React.Component {
  
  render() {
    return (
      <div>
        <SiteNav />
        <h1>News</h1>
        <SocialShare language={this.props.language}/>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(News);