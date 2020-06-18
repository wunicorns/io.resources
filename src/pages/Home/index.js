import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom'

const styles = {
    appBarSpacer: '',
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: 10,
      paddingBottom: 10,
    }
};

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch('https://us-central1-wunicorns-df883.cloudfunctions.net/helloWorld', {
            mode: 'no-cors',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
            console.log(response);
            return response.json()
        }).then((json)=>{
            console.log(json);
            return json;
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){
        const {classes} = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    Home
                </Container>
            </main>
        )
    }
}

export default withRouter(withStyles(styles)(Home));