import { useEffect, useState } from "react";
import { getListsAx, createListAx, deleteListAx } from "../axios/axios";

function useLists() {
  const [lists, setLists] = useState([]);

  const getLists = async () => {
    const res = await getListsAx();
    setLists(res);
  };

  const deleteList = async (id) => {
    await deleteListAx(id);
    setLists((prevState) => prevState.filter((l) => l.id !== id));
  };

  const createList = async (list) => {
    const res = await createListAx(list);
    setLists((prevState) => [...prevState, res]);
  };

  useEffect(() => {
    getListsAx().then((res) => setLists(res));
  }, []);

  return { lists, getLists, createList, deleteList };
}

export default useLists;
