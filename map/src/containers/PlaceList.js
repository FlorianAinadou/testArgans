import React, { useState,useContext, Component } from 'react';
import Place from '../components/Place';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class PlaceList extends Component{


   render(){ return (

        this.props.places.map( (place) =>(
            <Place name={place.name} lat={place.lat} lng={place.lng} zoom={place.zoom}/>
        ))
        
    );
    }
}

function mapStateToProps(state){
    return{
        places: state.places
    };
}

export default connect(mapStateToProps)(PlaceList);

