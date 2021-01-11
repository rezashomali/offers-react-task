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
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
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
            SIXT
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
