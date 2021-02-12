import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
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

const styles = (theme) => ({
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

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
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
                    <strong>Register</strong>
                  </Typography>
                  <form
                    className={classes.form}
                    noValidate
                    onSubmit={this.onSubmit}
                  >
                    <TextField
                      error={errors.firstName}
                      margin="normal"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="firstName"
                      value={this.state.firstName}
                      color="secondary"
                      onChange={this.onChange}
                      helperText={errors.firstName}
                      autoFocus
                    />
                    <TextField
                      error={errors.lastName}
                      margin="normal"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lastName"
                      value={this.state.lastName}
                      color="secondary"
                      onChange={this.onChange}
                      helperText={errors.lastName}
                    />
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
                      helperText={errors.email}
                    />
                    <TextField
                      errors={errors.password}
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
                      helperText={errors.password}
                    />
                    <TextField
                      errors={errors.password2}
                      margin="normal"
                      required
                      fullWidth
                      name="password2"
                      label="Verify Password"
                      type="password"
                      id="password2"
                      value={this.state.password2}
                      color="secondary"
                      onChange={this.onChange}
                      helperText={errors.password2}
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
                      Register
                    </Button>
                    <Grid container>
                      <Grid item>
                        <Link href="/login" variant="body2" color="secondary">
                          {"Already have an account? Sign In"}
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
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(
  withStyles(styles)(withRouter(Register))
);
