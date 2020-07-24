import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import SearchBox from "../../molecules/SearchBox/index";
import AddIcon from "@material-ui/icons/Add";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import { useHistory } from "react-router-dom";
import { url } from "../../../constants/index";

export default () => {
  const history = useHistory();

  const goToCardForm = () => history.push(url.cardForm);

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs>
        <SearchBox />
      </Grid>
      <Grid item>
        <IconButton>
          <ShuffleIcon />
        </IconButton>
        <IconButton onClick={goToCardForm}>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
