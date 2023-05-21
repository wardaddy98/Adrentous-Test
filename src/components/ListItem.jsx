import { useDispatch } from "react-redux";
import { deleteListItem } from "../redux/actions";
import { Button } from "antd";

const ListItem = ({ list, setFormValues, setIsModalOpen }) => {
  const { id, title, description, price, thumbnail } = list;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteListItem(id));
  };

  const handleUpdate = (id) => {
    setFormValues({
      id,
      title,
      description,
      price
    });
    setIsModalOpen(true);
  };
  return (
    <div className="list-item">
      <img
        src={thumbnail}
        alt="thumbnail"
        style={{ height: "50px", width: "50px" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap"
          }}
        >
          <span>{id}</span>
          <span> {title}</span>
          <span style={{ color: "green" }}>{price}</span>
        </div>
        <p>{description}</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <Button size="small" onClick={() => handleUpdate(id)}>
          Update
        </Button>
        <Button size="small" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
