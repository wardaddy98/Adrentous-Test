import { Modal, Button } from "antd";
import { useDispatch } from "react-redux";
import { addListItem, updateListItem } from "../redux/actions";

const AddUpdateModal = (props) => {
  const { isOpen, isEdit, handleClose, formValues, setFormValues } = props;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (isEdit) {
      dispatch(updateListItem(formValues));
    } else {
      dispatch(addListItem(formValues));
    }

    handleClose();
  };

  return (
    <Modal
      title={isEdit ? "Edit List item" : "Add List Item"}
      open={isOpen}
      onCancel={handleClose}
      footer={[
        <Button onClick={handleSubmit}>{isEdit ? "UPDATE" : "ADD"}</Button>
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label for="title">Title</label>
        <input
          name="title"
          type="text"
          value={formValues?.title}
          onChange={handleChange}
        />
        <label for="description">Description</label>
        <input
          name="description"
          type="textarea"
          value={formValues?.description}
          onChange={handleChange}
        />
        <label for="price">Price</label>
        <input
          name="price"
          type="number"
          min={"0"}
          value={formValues?.price}
          onChange={handleChange}
        />
      </div>
    </Modal>
  );
};

export default AddUpdateModal;
