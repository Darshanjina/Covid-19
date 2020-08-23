import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            stateList:[],
            loading:true,
        }
    }
    
    componentDidMount(){
        this.funGetRecords();
    }

    funGetRecords(){
        axios.get('https://api.covid19india.org/data.json')
        .then((res)=>{
            console.log(res)
            this.setState({stateList:res.data.statewise , loading:false});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        const {stateList , loading} = this.state;

        if (loading===true){
            return(
                <div className="my-5 py-5 text-center">
                    <div className="spinner-grow text-primary" role="status"></div>
                </div>
            )
            
        }
        else{
            return (
                <div className="container py-3">
                    <div className="row p-0">
                        {
                            stateList.map((item)=>(
                                <div className="col-md-4 p-2" key={item.state}>
                                    <div className="card p-3 bg-light">
                                        <div className="h5 mt-1">{item.state}</div>
                                        <hr className="mt-2 mb-3"></hr>
                                        <div className="h6 text-danger">Confirmed <span className="float-right">{item.confirmed}</span></div>
                                        <div className="h6 text-primary">Active <span className="float-right">{item.active}</span></div>
                                        <div className="h6 text-success">Recovered <span className="float-right">{item.recovered}</span></div>
                                        <div className="h6 text-secondary">Deaths <span className="float-right">{item.deaths}</span></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
        
    }
}
