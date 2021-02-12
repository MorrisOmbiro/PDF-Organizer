import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { withStyles } from "@material-ui/core/styles";

// Material UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Paper, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="primary" href="/">
        <strong>PDFizer</strong>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DB7093",
    },
    secondary: {
      main: "#DCA382",
    },
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
    console.log(nextProps.errors);
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "4rem" }}>
        <Container component="main" maxWidth="sm">
          <Paper elevation={3}>
            <ThemeProvider theme={theme}>
              <div style={{ padding: "2em" }}>
                <CssBaseline />
                <div className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    <strong>Sign in</strong>
                  </Typography>
                  <form
                    className={classes.form}
                    noValidate
                    onSubmit={this.onSubmit}
                  >
                    <TextField
                      error={errors.email}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      color="secondary"
                      onChange={this.onChange}
                      helperText={errors.email || errors.emailnotfound}
                      autoFocus
                    />
                    <TextField
                      error={errors.password}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={this.state.password}
                      color="secondary"
                      onChange={this.onChange}
                      helperText={errors.password || errors.passwordincorrect}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="secondary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2" color="secondary">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          href="/register"
                          variant="body2"
                          color="secondary"
                        >
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </div>
                <Box mt={8}>
                  <Copyright />
                </Box>
              </div>
            </ThemeProvider>
          </Paper>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(
  withStyles(styles)(Login)
);
