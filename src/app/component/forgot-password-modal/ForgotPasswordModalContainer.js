'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import ForgotPasswordModal from './ForgotPasswordModal';

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id) => {
      dispatch(Actions.showModal(id));
    },
    hideModal: () => {
      dispatch(Actions.hideModal());
    },
    setStoreName: (storeName) => {
      dispatch(Actions.setStoreName(storeName));
    },
    setEmail: (email) => {
      dispatch(Actions.setEmail(email));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordModal);