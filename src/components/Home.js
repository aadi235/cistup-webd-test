import './Home.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
    

    const navigate = useNavigate()

    const [isOptionSkip, setIsOptionSkip] = React.useState(false)
        
    function handleChange(event) {
        const {name, value} = event.target
        props.changeState(name, value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(props.freqMode === '' || props.totalDist === ''){
            setIsOptionSkip(true)
            return
        }
        navigate('/travelInfo', {replace: false})
    }

    return (
        <div className='home'>
            <header className='home-title'>
                <h1>Respondent Travel Profile</h1>
            </header>
            <div className='home-mainContent'>
                <form className='home-form' onSubmit={handleSubmit}>
                    <div className='form-questions-section'>
                        <div className='form-question-block'>
                            <legend className='form-question'>What is your most frequently used means of travel from your home to work location?</legend>
                            <input 
                                type    ='radio'
                                id      ='Bus'
                                name    ='freqMode'
                                value   ='Bus'
                                checked ={props.freqMode === 'Bus'}
                                onChange={handleChange}
                            />
                            <label htmlFor='Bus'>Bus</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='Metro'
                                name    ='freqMode'
                                value   ='Metro'
                                checked ={props.freqMode === 'Metro'}
                                onChange={handleChange}
                            />
                            <label htmlFor='Metro'>Metro</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='OwnTwoWheeler'
                                name    ='freqMode'
                                value   ='OwnTwoWheeler'
                                checked ={props.freqMode === 'OwnTwoWheeler'}
                                onChange={handleChange}
                            />
                            <label htmlFor='OwnTwoWheeler'>Own Two-wheeler</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='Own Car'
                                name    ='freqMode'
                                value   ='OwnCar'
                                checked ={props.freqMode === 'OwnCar'}
                                onChange={handleChange}
                            />
                            <label htmlFor='OwnCar'>Own Car</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='Walk/Bicycle'
                                name    ='freqMode'
                                value   ='Walk/Bicycle'
                                checked ={props.freqMode === 'Walk/Bicycle'}
                                onChange={handleChange}
                            />
                            <label htmlFor='Walk/Bicycle'>Walk / Bicycle</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='Auto'
                                name    ='freqMode'
                                value   ='Auto'
                                checked ={props.freqMode === 'Auto'}
                                onChange={handleChange}
                            />
                            <label htmlFor='Auto'>Auto</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='Ola/Uber'
                                name    ='freqMode'
                                value   ='Ola/Uber'
                                checked ={props.freqMode === 'Ola/Uber'}
                                onChange={handleChange}
                            />
                            <label htmlFor='Ola/Uber'>App based ride hailing cab services including Ola/Uber</label>
                        </div>

                        <div className='form-question-block'>
                            <legend className='form-question'>What is your most frequently used means of travel from your home to work location?</legend>
                            <input 
                                type    ='radio'
                                id      ='<5km'
                                name    ='totalDist'
                                value   ='<5km'
                                checked ={props.totalDist === '<5km'}
                                onChange={handleChange}
                            />
                            <label htmlFor='<5 km'> less than 5 km </label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='5-10 km'
                                name    ='totalDist'
                                value   ='5-10km'
                                checked ={props.totalDist === '5-10km'}
                                onChange={handleChange}
                            />
                            <label htmlFor='5-10 km'>5 - 10 km</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='10-15 km'
                                name    ='totalDist'
                                value   ='10-15km'
                                checked ={props.totalDist === '10-15km'}
                                onChange={handleChange}
                            />
                            <label htmlFor='10-15 km'>10 - 15 km</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='15-20 km'
                                name    ='totalDist'
                                value   ='15-20km'
                                checked ={props.totalDist === '15-20km'}
                                onChange={handleChange}
                            />
                            <label htmlFor='15-20 km'>15 - 20 km</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='20-25 km'
                                name    ='totalDist'
                                value   ='20-25km'
                                checked ={props.totalDist === '20-25km'}
                                onChange={handleChange}
                            />
                            <label htmlFor='20-25 km'>20 - 25 km</label>
                            <br />
                            <input 
                                type    ='radio'
                                id      ='>25 km'
                                name    ='totalDist'
                                value   ='>25km'
                                checked ={props.totalDist === '>25km'}
                                onChange={handleChange}
                            />
                            <label htmlFor='>25km'>greater than 25 km</label>
                        </div>
                    </div>
                    {isOptionSkip && <h3 className='form-error'>Please answer all questions</h3>}
                    <button className='submit-button'>Submit and Next</button>
                </form>
            </div>
        </div>
    )
}