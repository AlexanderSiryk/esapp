import React from "react";
import LogInButtonContainer from "../../LogInButton/LogInButtonContainer";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		/*backgroundImage: 'url(https://source.unsplash.com/random)',*/
        backgroundImage: 'url(https://imagekit.io/static/img/newPages/homepage-wave-bg.svg)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	wrapper: {
		backgroundColor: theme.palette.type === 'light'
			? theme.palette.grey[50]
			: theme.palette.grey[900],
	},
	button: {
		marginTop: '20vh',
	}
}));

let LoginPage = () => {
	const classes = useStyles();
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline/>
			<Grid item xs={false} sm={4} md={7} className={classes.image}/>
			<Grid item xs={12} sm={8} md={5}
				  className={classes.wrapper} component={Paper}
				  elevation={6} square>
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
						Welcome, Log in
					</Typography>
					<Typography component="h1" variant="h5">
						Using your Google Account
					</Typography>
					<div className={classes.button}>
						<LogInButtonContainer/>
					</div>
				</div>
			</Grid>
		</Grid>
	);
}

export default LoginPage;
