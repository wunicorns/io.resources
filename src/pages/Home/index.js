import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const styles = {

    // appBarSpacer: '',
    // content: {
    //   flexGrow: 1,
    //   height: '100vh',
    //   overflow: 'auto',
    // },
    // container: {
    //   paddingTop: 10,
    //   paddingBottom: 10,
    // }

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
            <div className={"d-flex h-100 text-center text-white bg-dark"}>
                <div className={"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"}>
                    <header class="mb-auto">
                        <div>
                        <h3 className={"float-md-start mb-0"}>Cover</h3>
                        <nav className={"nav nav-masthead justify-content-center float-md-end"}>
                            <a className={"nav-link active"} aria-current="page" href="#">Home</a>
                            <a className={"nav-link"} href="#">Features</a>
                            <a className={"nav-link"} href="#">Contact</a>
                        </nav>
                        </div>
                    </header>

                    <main class="px-3">
                        <h1>Cover your page.</h1>
                        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                        <p class="lead">
                        <a href="#" className={"btn btn-lg btn-secondary fw-bold border-white bg-white"}>Learn more</a>
                        </p>
                    </main>

                    <footer class="mt-auto text-white-50">
                        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(Home));