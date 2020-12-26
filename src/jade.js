import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

const Style1 = makeStyles(theme => ({
	root: {
	},
	card: {
		maxWidth: 1080
	},
	media: {
		height: 720,
		width: 1080
		}
	}))
	

const Style2 = makeStyles(theme => ({
	root: {
	},
	card: {
		maxWidth: 1500
	}
	}))

	const Style3 = makeStyles(theme => ({
		root: {
		},
		card: {
			maxWidth: 1080
		},
		media: {
			height: 100,
			width: 1080
			}
		}))

	function Details({Image}) {
		const classes = Style1()
		return (
			<div className={classes.root}>
	
				<Grid>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia className={classes.media} image='http://chakolaspavilion.com/images/halls/jade-room-strip.jpg' title='Event' />
						</CardActionArea>
						</Card>
						</Grid>
				</div>
	)
}
function Media() {
	const classes = Style2()
	return (
		<div className={classes.root}>
			<Grid container direction='row' align="center" justify="center">
			<Card className={classes.card}>
				<CardActionArea>
					<video autoplay="true" muted="true" width='1080' height='1045' preload='true' loop='true' controls controlsList="nodownload">
					<source src= 'https://res.cloudinary.com/chakolas/video/upload/v1606558971/Chakolas_1_ictscg.mp4'/>
					</video>
				</CardActionArea>
			</Card>
			</Grid>
		</div>
		)
}
function Footer({Image}) {
	const classes = Style3()
	return (
		<div className={classes.root}>

			<Grid>
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia className={classes.media} image='https://chakolas.github.io/images/BG1080.png' title='Event' />
					</CardActionArea>
					</Card>
					</Grid>
			</div>
)
}

export {
	Media,
	Details,
	Footer
}
