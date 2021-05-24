import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ScreenSize } from "../../assets/styles/ScreenSize";
import { Colors } from "../../assets/styles/Colors";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "yellow",
        color: "white",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: `${Colors.secondaryBackgroundColor}`,
          color: "white",
        },
        "&:hover fieldset": {
          borderColor: `${Colors.secondaryBackgroundColor}`,
          color: "white",
        },
        "&.Mui-focused fieldset": {
          color: "white",
        },
      },
    },
  })
);

export const Input = styled(TextField)`
  color: ${Colors.bodyFontColor} !important;
  width: 100%;

  label {
    color: ${Colors.bodyFontColor} !important;
    font-size: 14px;
  }

  input {
    color: ${Colors.bodyFontColor} !important;
    font-size: 16px;

    &::-webkit-inner-spin-button {
      padding: 10px;
      background: #000;
      opacity: 1;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  button {
    margin: 10px 0;
  }

  @media only screen and (min-width: ${ScreenSize.tabletScreen}) {
    flex-direction: row;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  margin: 10px 0 20px 0;
`;
export const ProductImage = styled.div`
  overflow: hidden;
  min-width: 100px;
  width: 100px;
  height: 100px;
  border-radius: 100%;

  img {
    width: 100%;
  }
`;
export const ProductInfo = styled.div`
  margin-left: 20px;

  p {
    margin-bottom: 10px;
  }
`;
export const ProductTitle = styled.div``;
export const ProductPrice = styled.div``;
