import React from "react";
import { Pagination } from "react-bootstrap";
// import styled from "styled-components";

// const Pagination = styled.span`
//   background-color: #1c1c24;
//   padding: 6px 12px;
//   border: 1px solid transparent;
//   border-radius: 3px;
//   color: white;
//   cursor: pointer;
//   font-size: 15px;
//   -webkit-box-shadow: inset 9px 10px 26px -7px rgba(0, 0, 0, 0.27);
//   -moz-box-shadow: inset 9px 10px 26px -7px rgba(0, 0, 0, 0.27);
//   box-shadow: inset 9px 10px 26px -7px rgba(0, 0, 0, 0.27);
// `;

export default function JobsPagination({ page, setPage, hasNextPage }) {
  function adjustPage(amount) {
    setPage((prevPage) => prevPage + amount);
  }
  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {page !== 1 && (
        <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
      )}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && (
        <Pagination.Item onClick={() => adjustPage(-1)}>
          {page - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && (
        <Pagination.Item onClick={() => adjustPage(1)}>
          {page + 1}
        </Pagination.Item>
      )}
      {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
    </Pagination>

    // <div>
    //   {page !== 1 && (
    //     <Pagination onClick={() => adjustPage(-1)}> `{"<"}` </Pagination>
    //   )}
    //   {page !== 1 && <Pagination onClick={() => setPage(1)}>1</Pagination>}
    //   {page > 2 && <Pagination>...</Pagination>}
    //   {page > 2 && (
    //     <Pagination onClick={() => adjustPage(-1)}>{page - 1}</Pagination>
    //   )}
    //   <Pagination active>{page}</Pagination>
    //   {hasNextPage && (
    //     <Pagination onClick={() => adjustPage(1)}>{page + 1}</Pagination>
    //   )}
    //   {hasNextPage && (
    //     <Pagination onClick={() => adjustPage(1)}> &gt; </Pagination>
    //   )}
    // </div>
  );
}
