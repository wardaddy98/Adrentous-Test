import { Modal, Button } from "antd";

const AddUpdateModal = (props) => {
  const { isOpen, isEdit, handleClose, formValues, setFormValues } = props;

  console.log(props, "TSTR");
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      title={"Edit List item"}
      open={isOpen}
      onCancel={handleClose}
      footer={[<Button>{isEdit ? "UPDATE" : "ADD"}</Button>]}
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
          value={formValues?.price}
          onChange={handleChange}
        />
      </div>
    </Modal>
  );
};

export default AddUpdateModal;
