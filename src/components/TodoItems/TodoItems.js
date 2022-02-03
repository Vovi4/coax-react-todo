import { useDispatch, useSelector } from "react-redux";

import CurentDate from "../Date/CurrentDate";
import Button from "../../elements/Button";
import Loader from "../../elements/Loader";
import Item from "../Item/Item";

import { postFetch } from "../../redux/actions/fetchAction";


const TodoItems = () => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.app.loading);
  
  const fetchHandler = () => {
    dispatch(postFetch())
  }  

  return (
    <> 
      {(loading) ? <Loader /> : null}     
      <CurentDate />
      <Button onClick={fetchHandler}/>
      <Item />
    </>
  )
}

export default TodoItems;