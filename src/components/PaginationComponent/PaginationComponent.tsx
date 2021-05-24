import React, { FC } from "react";

import Pagination from "@material-ui/lab/Pagination";

import { PaginationContainer, useStyles } from "./PaginationComponent.styles";

type Props = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: any;
  page: number;
};

const PaginationComponent: FC<Props> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  page,
}: Props) => {
  const classes = useStyles();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageCount = pageNumbers[pageNumbers.length - 1];
  const handleChange = (event: any, value: any) => {
    currentPage(value);
  };

  return (
    <>
      <PaginationContainer className={classes.root}>
        <Pagination
          count={pageCount}
          onChange={handleChange}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          size="small"
        ></Pagination>
      </PaginationContainer>
    </>
  );
};

export default PaginationComponent;
