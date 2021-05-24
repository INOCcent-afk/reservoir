import styled from "styled-components";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Colors } from "../../assets/styles/Colors";

export const useStyles = makeStyles(() =>
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

export const PaginationContainer = styled.div`
  background: ${Colors.primaryFontColor60};
  padding: 10px;

  ul {
    width: 100%;
  }
  nav {
    justify-content: space-between;
  }
`;
