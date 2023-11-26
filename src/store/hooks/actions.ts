import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { fakestoreActions } from '../fakestore/fakestore.slice'

const actions = {
  ...fakestoreActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}