import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLists } from "../redux/actions";
import ListItem from "./ListItem";
import { Button } from "antd";
import AddUpdateModal from "./AddUpdateModal";

const ListWrapper = () => {
  const lists = useSelector((state) => state.main.lists);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    id: null,
    title: "",
    description: "",
    price: 0
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        dispatch(setLists(result.products));
      });
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormValues({ id: null, title: "", description: "", price: 0 });
  };

  useEffect(() => {
    console.log(formValues, "HGG");
  }, [formValues]);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setIsModalOpen(true)}>Add list</Button>
      </div>
      <div className="list-wrapper">
        {lists &&
          lists.map((list) => (
            <ListItem
              key={list.id}
              list={list}
              setFormValues={setFormValues}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
      </div>

      {isModalOpen && (
        <AddUpdateModal
          isOpen={isModalOpen}
          isEdit={!!formValues?.id}
          handleClose={handleModalClose}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
    </>
  );
};

export default ListWrapper;
