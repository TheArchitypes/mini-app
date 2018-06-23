import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
// import status from 'constants/status';
import autobind from 'class-autobind';
import defaultFormFields from 'config/formFields';
import { AccordionContainer } from 'modules/UXlibrary/AccordionContainer';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { StaticTraditionalMortgageForm1a } from './StaticTraditionalMortgageForm1a';
import { StaticTraditionalMortgageForm1b } from './StaticTraditionalMortgageForm1b';
import { CreditDisclosureForm } from './CreditDisclosureForm';
import sample from '../../assets/images/sample.pdf';
import p1 from '../../assets/images/traditional_p1.pdf';
import p2 from '../../assets/images/traditional_p2.pdf';
import p3 from '../../assets/images/traditional_p3.pdf';
import p4 from '../../assets/images/traditional_p4.pdf';
import p5 from '../../assets/images/traditional_p5.pdf';
import p6 from '../../assets/images/traditional_p6.pdf';
import p7 from '../../assets/images/traditional_p7.pdf';
import p8 from '../../assets/images/traditional_p8.pdf';

export class TraditionalMortgageContainer extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      currentPage: 1,
    }
  }

  handleSuccess(payload, id) {
    console.log('payload: ', payload);
  }

  render() {
    const { status, currentValues, history } = this.props;
    const { currentPage } = this.state;
    // if (!status) {
    //   return(
    //     <h2>Form Loading...</h2>
    //   );
    // }
    // return (
    //   <div className="tradition-mortgage-container">
    //     <AccordionContainer currentPage={currentPage} >
    //       {Object.keys(defaultFormFields['traditional-mortgage']).map((form, index) => (
    //         <div className="accordion-division" key={index}>
    //           <StaticTraditionalMortgageForm
    //             history={history}
    //             onSuccess={this.handleSuccess}
    //             formFields={defaultFormFields['traditional-mortgage'][form]}
    //             values={{}}
    //           />
    //         </div>
    //       ))}
    //     </AccordionContainer>
    //   </div>
    // );
    return (
      <div className="tradition-mortgage-container">
        <AccordionContainer currentPage={currentPage} >
          <StaticTraditionalMortgageForm1a />
          <Document file={p1}><Page pageNumber={1} /></Document>
          <Document file={p2}><Page pageNumber={1} /></Document>
          <Document file={p3}><Page pageNumber={1} /></Document>
          <Document file={p4}><Page pageNumber={1} /></Document>
          <Document file={p5}><Page pageNumber={1} /></Document>
          <Document file={p6}><Page pageNumber={1} /></Document>
          <Document file={p7}><Page pageNumber={1} /></Document>
          <Document file={p8}><Page pageNumber={1} /></Document>
          <div className="accordion-division">
            <CreditDisclosureForm
              history={history}
              onSuccess={this.handleSuccess}
              formFields={{}}
              values={{}}
            />
          </div>
        </AccordionContainer>
      </div>
    );
  }
}

const { shape, string, number, bool } = PropTypes;
TraditionalMortgageContainer.propTypes = {
  params: shape({
    page: string,
  }),
  currentValues: shape({}),
  isReady: bool.isRequired,
}

TraditionalMortgageContainer.defaultProps = {
  params: {
    page: 1,
  },
  currentValues: {},
};

function mapStateToProps(state, ownProps) {
  // const isReady = state.status.mortgage[type] === status.DONE;
  const page = ownProps.match.params.page;
  const currentValues = _.get(state, `TraditionalMortgage[${page}]`, defaultFormFields['traditional-mortgage'][page]);
  const isReady = false;
  console.log('traditional props: ', ownProps);
  return {
    isReady,
    history: ownProps.history,
    params: ownProps.match.params,
    currentPage: _.get(state, 'CurrentPage', null),
    currentValues,
  }
}

export default connect(mapStateToProps)(TraditionalMortgageContainer);
