import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  state = { showReview: false };

  renderContent() {
    if(this.state.showReview) {
      return <SurveyFormReview
        />;
    }

    return <SurveyForm
      onSurveySubmit={() => this.setState({ showFormReview: true })}
      />;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);