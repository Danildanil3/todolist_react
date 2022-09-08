import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addListAction, loadDashboardAction, deleteListAction} from "../store/dashboard/reducer"

function useLists() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.dashboard.lists);

  const deleteList = (id) => {
    dispatch(deleteListAction(id));
  };

  const createList = (list) => {
    dispatch(addListAction(list));
  };

  useEffect(() => {
    dispatch(loadDashboardAction)
  }, []);

  return { lists, createList, deleteList };
}

export default useLists;
