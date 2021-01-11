import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import OffersList from "./components/OffersList/OffersList";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffers } from "./redux/actions/actions";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    marginBottom: 20,
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  const { error, loading } = useSelector((state) => ({
    error: state.error,
    loading: state.loading,
  }));

  return (
    <div className="App">
      <AppBar color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            SIXT - frontend coding task
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.layout}>
        {loading ? "Loading..." : error ? error : <OffersList />}
      </main>
    </div>
  );
}

export default App;
