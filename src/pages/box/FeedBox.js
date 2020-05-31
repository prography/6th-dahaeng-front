import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, login } from 'store/auth';
import { getUser } from 'store/user';
import styled from 'styled-components';
import AuthForm from 'components/AuthForm';
import { withRouter } from 'react-router-dom';


const FeedBox = ({ record }) => {
  return <></>;
};

export default FeedBox;
