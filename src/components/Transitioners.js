import React, { Component } from 'react';
import {connect} from 'react-redux';

export function Transitioners(props) {    
    
        return (
    
        <div>
            <button type="submit">Read</button>
            <p>{props.read}</p>
            <button type="submit">Watch</button>
            <p>{props.watch}</p>
            <button type="submit">Listen</button>
            <p>{props.listen}</p>
            <button type="submit">Nourish</button>
            <p>{props.nourish}</p>
            <button type="submit">Concentrate</button>
            <p>{props.concentrate}</p>
        </div>
        )
    }

const mapStatetoProps = state => ({
    watch: state.watch,
    read: state.read,
    listen: state.listen,
    nourish: state.nourish,
    concentrate: state.concentrate
});

export default connect(mapStatetoProps)(Transitioners);

