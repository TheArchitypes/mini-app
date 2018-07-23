import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
// import status from 'constants/status';
import autobind from 'class-autobind';
import defaultFormFields from 'config/formFields';
import { AccordionContainer } from 'modules/UXlibrary/AccordionContainer';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { NewForm1 } from './NewForm1';
import { NewForm2 } from './NewForm2';
import { NewForm3 } from './NewForm3';
import { NewForm4 } from './NewForm4';
import { NewForm5 } from './NewForm5';
import { CreditDisclosureForm } from './CreditDisclosureForm';
import sample from '../../assets/images/sample.pdf';

export class TraditionalMortgageContainer extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      currentPage: 1,
      incomes: [],
      assets: [],
    }
  }

  handleSuccess(payload, id) {
    console.log('payload: ', payload);
  }

  handleAddRemoveFields(type, index, remove) {
    const newType = _.cloneDeep(this.state[type]);
    remove ? newType.splice(index, 1) : newType.push({});
    this.setState({
      type: newType,
    });
  }

  render() {
    const { status, currentValues, history } = this.props;
    const { currentPage, incomes, assets } = this.state;
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
          <NewForm1 onSuccess={this.handleSuccess} history={history} formFields={{}}/>
          <NewForm2 onSuccess={this.handleSuccess} history={history} formFields={{}}/>
          <NewForm3 onSuccess={this.handleSuccess} history={history} formFields={{}} addIncome={this.handleAddRemoveFields} incomes={incomes}/>
          <NewForm4 onSuccess={this.handleSuccess} history={history} formFields={{}} addAsset={this.handleAddRemoveFields} assets={assets}/>
          <NewForm5 onSuccess={this.handleSuccess} history={history} formFields={{}} />
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
