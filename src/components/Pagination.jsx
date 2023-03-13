import BootstrapPagination from "react-bootstrap/Pagination";
import React from "react";
import { useNavigate } from "react-router-dom";

function Pagination(props) {
  const { categoryId } = props;

  const navigate = useNavigate();
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <BootstrapPagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          navigate(`/category/${categoryId}?page=${number}`);
        }}
      >
        {number}
      </BootstrapPagination.Item>
    );
  }

  return <BootstrapPagination>{items}</BootstrapPagination>;
}

export default Pagination;
