import { useEffect, useState } from "react";
import { getListsAx, createListAx, deleteListAx  } from "../axios/axios";

function useLists() {
  const [lists, setLists] = useState([]);

  const getLists = async (endPoint) => {
    const res = await getListsAx(endPoint);
    setLists(res);
  };

  const deleteList = async (id) => {
    await deleteListAx(id);
    setLists((prevState) => prevState.filter((l) => l.id !== id));
  };

  const createList = async () => {
    const res = await createListAx();
    setLists((prevState) => [...prevState, res]);
  };

  useEffect(async () => {
    const res = await getListsAx();
    setLists(res);
  }, []);

  return { lists, getLists, createList, deleteList };
}

export default useLists;
