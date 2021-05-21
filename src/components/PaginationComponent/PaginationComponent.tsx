import React, { FC } from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Colors } from "../../assets/styles/Colors";

import Pagination from "@material-ui/lab/Pagination";

import { PaginationContainer } from "./PaginationComponent.styles";

type Props = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: any;
  page: number;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .MuiPagination-ul": {
        justifyContent: "space-between",
      },
      "& .MuiPaginationItem-root": {
        color: Colors.bodyFontColor,
        fontSize: "1.2rem",
      },
      "& .MuiPaginationItem-root:hover": {
        backgroundColor: Colors.secondaryFontColor,
      },
      "& .Mui-selected": {
        backgroundColor: Colors.secondaryFontColor,
      },
    },
  })
);

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
