import React from 'react'
import FetchData from '../data/FetchData'
import './TravelInfo.css'
import Row from './Row'
import { useNavigate} from 'react-router-dom'

export default function TravelInfo(props){

    const navigate = useNavigate();

    const travelData = require(`../data/${FetchData[props.totalDist]}.json`)

    const [highlight, setHighlight] = React.useState('')

    function handleHighlight(event) {
        const {value} = event.target
        setHighlight(value)
    }

    function goBack(event) {
        event.preventDefault()
        navigate('/', {replace: false})
    }

    return(
        <div className='travelInfo'>
            <div className='travelInfo-title'>
                <h1>Mode choice</h1>
            </div>
            <div className='modeChoiceTable'>
                <Row 
                    title            = ''
                    attribute        = ''
                    Mode             = {props.Mode}
                    travelData       = {travelData}
                    highlight        = {highlight}
                    handleHighlight  = {handleHighlight}
             />
                <Row 
                    title            = 'Total travel time spent while inside the vehicle(s)'
                    attribute        = 'ivtt'
                    Mode             = {props.Mode}
                    travelData       = {travelData}
                    highlight        = {highlight}
                    handleHighlight  = {handleHighlight}
             />
                <Row 
                    title            = 'Total travel time spent outside vehicle(s)'
                    attribute        = 'totaltime'
                    Mode             = {props.Mode}
                    travelData       = {travelData}
                    highlight        = {highlight}
                    handleHighlight  = {handleHighlight}
             />
                <Row 
                    title            = 'Possible delay due to traffic congestion or other uncertainties'
                    attribute        = 'tvariab'
                    Mode             = {props.Mode}
                    travelData       = {travelData}
                    highlight        = {highlight}
                    handleHighlight  = {handleHighlight}
             />
                <Row 
                    title            = 'Total one-way cost of travel'
                    attribute        = 'tcost'
                    Mode             = {props.Mode}
                    travelData       = {travelData}
                    highlight        = {highlight}
                    handleHighlight  = {handleHighlight}
             />
                <Row 
                    title            = 'Extent of crowding in the vehicle'
                    attribute        = 'crowd'
                    Mode             = {props.Mode}
                    travelData       = {travelData}
                    highlight        = {highlight}
                    handleHighlight  = {handleHighlight}
             />
                <Row 
                    title            = 'Service type'
                    attribute        = 'serv'
                    Mode             = {props.Mode}
                    travelData       = {travelData}
                    highlight        = {highlight}
                    handleHighlight  = {handleHighlight}
             />
            </div>
            <button className='back-button' onClick={goBack}>Back</button>
        </div>
    )
}