import React from 'react'
import './Row.css'

export default function Row(props){
    
    const rowItems = props.Mode.map(item =>{

        var mode = props.travelData.Data[0][`${item}`]

        var displayData = props.attribute === '' ? 
                            props.travelData.Data[0][`${item}`] : 
                            props.attribute === 'totaltime' ? props.travelData.Data[0][`${item}.walktime`] + props.travelData.Data[0][`${item}.waittime`]:
                                                              props.travelData.Data[0][`${item}.${props.attribute}`]

        let icon = ''  
        let transfers = props.travelData.Data[0][`${item}.trans`]                                         
        switch(props.attribute){
            case 'ivtt':
                if(mode === 'Bus Type 1' || mode === 'Bus Type 2'){
                    icon = (
                        <>
                            <div className='transfer-title'>
                                {transfers !==0 ? `${transfers} transfer${transfers !==1 ? 's' : ''}` : (<br />)}
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 21q-.425 0-.713-.288T5 20v-2.05q-.45-.5-.725-1.113T4 15.5V6q0-2.075 1.925-3.038T12 2q4.3 0 6.15.925T20 6v9.5q0 .725-.275 1.338T19 17.95V20q0 .425-.288.713T18 21h-1q-.425 0-.713-.288T16 20v-1H8v1q0 .425-.288.713T7 21H6Zm0-11h12V7H6v3Zm2.5 6q.625 0 1.063-.438T10 14.5q0-.625-.438-1.063T8.5 13q-.625 0-1.063.438T7 14.5q0 .625.438 1.063T8.5 16Zm7 0q.625 0 1.063-.438T17 14.5q0-.625-.438-1.063T15.5 13q-.625 0-1.063.438T14 14.5q0 .625.438 1.063T15.5 16Z"/></svg>
                            {transfers !== 0 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.7 17.3q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z"/></svg>}
                            {transfers !==0 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 21q-.425 0-.713-.288T5 20v-2.05q-.45-.5-.725-1.113T4 15.5V6q0-2.075 1.925-3.038T12 2q4.3 0 6.15.925T20 6v9.5q0 .725-.275 1.338T19 17.95V20q0 .425-.288.713T18 21h-1q-.425 0-.713-.288T16 20v-1H8v1q0 .425-.288.713T7 21H6Zm0-11h12V7H6v3Zm2.5 6q.625 0 1.063-.438T10 14.5q0-.625-.438-1.063T8.5 13q-.625 0-1.063.438T7 14.5q0 .625.438 1.063T8.5 16Zm7 0q.625 0 1.063-.438T17 14.5q0-.625-.438-1.063T15.5 13q-.625 0-1.063.438T14 14.5q0 .625.438 1.063T15.5 16Z"/></svg>}
                        </>
                    )
                }
                else if(mode === 'Walk / Bicycle'){
                    icon = (
                            <>
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 5.5q-.825 0-1.413-.588T11.5 3.5q0-.825.588-1.413T13.5 1.5q.825 0 1.413.588T15.5 3.5q0 .825-.588 1.413T13.5 5.5ZM8.325 23q-.55 0-.875-.388t-.2-.912L9.8 8.9L8 9.6V12q0 .425-.288.712T7 13q-.425 0-.713-.288T6 12V9.625q0-.6.325-1.1t.9-.75L11.05 6.15q.725-.3 1.475-.063T13.7 7l1 1.6q.55.875 1.425 1.5t2 .825q.375.05.625.337t.25.638q0 .475-.338.787t-.762.238q-1.325-.2-2.462-.838T13.5 10.5l-.6 3l1.475 1.4q.3.3.463.663t.162.787V22q0 .425-.288.713T14 23q-.425 0-.713-.288T13 22v-5l-2.1-2l-1.625 7.25q-.075.3-.338.525T8.325 23Z"/></svg>
                                <span> </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M388 448a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92Zm0-152a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60ZM124 448a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92Zm0-152a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60Zm196-168a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 64a32 32 0 1 0-.2 64Z"/><path fill="currentColor" d="M367.55 192h-43.76a4 4 0 0 1-3.51-2.08l-31.74-58.17a31 31 0 0 0-49.38-7.75l-69.86 70.4a32.56 32.56 0 0 0-9.3 22.4c0 17.4 12.6 23.6 18.5 27.1c28.5 16.42 48.57 28.43 59.58 35.1a4 4 0 0 1 1.92 3.41v69.12c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 272 352v-86a16 16 0 0 0-6.66-13l-37-26.61a4 4 0 0 1-.58-6l42-44.79a4 4 0 0 1 6.42.79L298 215.77a16 16 0 0 0 14 8.23h56a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23Z"/></svg>
                            </>
                    )
                }
                else if(mode === 'Ride-hailing Car'){
                    icon = (
                            <>
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19v1q0 .425-.288.713T5 21H4q-.425 0-.713-.288T3 20v-8l2.1-6q.15-.45.537-.725T6.5 5H9V3h6v2h2.5q.475 0 .863.275T18.9 6l2.1 6v8q0 .425-.287.713T20 21h-1q-.425 0-.713-.288T18 20v-1H6Zm-.2-9h12.4l-1.05-3H6.85L5.8 10Zm1.7 6q.625 0 1.063-.438T9 14.5q0-.625-.438-1.063T7.5 13q-.625 0-1.063.438T6 14.5q0 .625.438 1.063T7.5 16Zm9 0q.625 0 1.063-.438T18 14.5q0-.625-.438-1.063T16.5 13q-.625 0-1.063.438T15 14.5q0 .625.438 1.063T16.5 16Z"/></svg>
                            </>
                    )
                }
                else if(mode === 'Auto'){
                    icon = (
                            <>
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><g fill="currentColor"><path d="M28 26.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"/><path d="M9.92 6c-1.15 0-2.18.74-2.54 1.83c-.03.08.03.17.12.17h2.148l-2.326 7h-.008l-.334 1h.01l-.05.147a.474.474 0 0 0-.006.023l-.244.73a5.33 5.33 0 0 0-.061 3.178c-.373.146-.639.51-.639.932v.518A4.5 4.5 0 0 0 2 25.83c0 .09.07.17.17.17h.865a3.5 3.5 0 1 0 6.935.96l.02.04h13.035a3.501 3.501 0 1 0 5.965-2.95V23c-.55 0-1-.45-1-1v-1.69c0-.17.14-.31.31-.31h.7v-1h-.004v-8.07C29.006 8.21 26.78 6 24.06 6H9.92Zm.782 2H11v4.67C11 13.96 9.96 15 8.67 15h-.295l2.327-7ZM23.98 8v11h-1.52c-.81 0-1.47.66-1.47 1.47V24h-2V8h4.99Zm-11 0h5.01v11h-1.53c-.81 0-1.47.66-1.47 1.47V24h-2v-8h-.01V8ZM4 26.5c0-.171.017-.338.05-.5h1.035a1.5 1.5 0 1 0 2.83 0H8.95a2.5 2.5 0 1 1-4.95.5Zm2.99-3.48v-3.01H8.5c.83 0 1.51.67 1.51 1.51c-.01.82-.68 1.5-1.51 1.5H6.99ZM26.49 29a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"/></g></svg>
                            </>
                        )
                }
                else if(mode === 'Own Car'){
                    icon = (
                            <>
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19v.525q0 .625-.425 1.05T4.5 21q-.625 0-1.063-.438T3 19.5V12l2.1-6q.15-.45.537-.725T6.5 5h11q.475 0 .863.275T18.9 6l2.1 6v7.525q0 .625-.425 1.05T19.5 21q-.625 0-1.062-.438T18 19.5V19H6Zm-.2-9h12.4l-1.05-3H6.85L5.8 10Zm1.7 6q.625 0 1.063-.438T9 14.5q0-.625-.438-1.063T7.5 13q-.625 0-1.063.438T6 14.5q0 .625.438 1.063T7.5 16Zm9 0q.625 0 1.063-.438T18 14.5q0-.625-.438-1.063T16.5 13q-.625 0-1.063.438T15 14.5q0 .625.438 1.063T16.5 16Z"/></svg>
                            </>
                    )
                }
                else if(mode === 'Own Two-wheeler'){
                    icon = (
                            <>
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19q-1.65 0-2.825-1.175T0 15q0-1.425.913-2.525T3.25 11.1l-.7-.6H0V9h4.5L7 10.5L11 9h3.15L12.6 7H10V5h3.55l2.1 2.7L19 6v3h-2.3l1.75 2.3q.375-.15.763-.225T20 11q1.65 0 2.825 1.175T24 15q0 1.65-1.175 2.825T20 19q-1.65 0-2.825-1.175T16 15q0-.675.238-1.312T16.9 12.5l-.5-.6L13 17h-3l-2-1.75q-.125 1.575-1.275 2.663T4 19Zm0-2q.825 0 1.413-.588T6 15q0-.825-.588-1.413T4 13q-.825 0-1.413.588T2 15q0 .825.588 1.413T4 17Zm16 0q.825 0 1.413-.588T22 15q0-.825-.588-1.413T20 13q-.825 0-1.413.588T18 15q0 .825.588 1.413T20 17Z"/></svg>
                            </>
                    )
                }
                else if(mode === 'Metro / Train'){
                    icon = (
                            <>
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 15a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 9h10v5H7V9m8.5 6a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m2.5.88V9c0-2.62-2.68-3-6-3c-3 0-6 .37-6 3v6.88a2.62 2.62 0 0 0 2.62 2.62L7.5 19.62V20h1.67l1.5-1.5h2.83L15 20h1.5v-.38l-1.13-1.12c1.45 0 2.63-1.17 2.63-2.62M17.8 2.8C20.47 3.84 22 6.05 22 8.86V22H2V8.86C2 6.05 3.53 3.84 6.2 2.8C8 2.09 10.14 2 12 2c1.86 0 4 .09 5.8.8Z"/></svg>
                            </>    
                    )
                }
            // eslint-disable-next-line
            case 'totaltime':
                displayData = `${displayData} min`
                break
            case 'tvariab':
                displayData = `...up to ${displayData} min and more` 
                break
            case 'tcost':
                displayData = `Rs. ${displayData}`
                break
            case 'crowd':
                if(displayData === 1){
                    displayData = 'Many seats available'
                    icon = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>)
                }
                else if(displayData === 2){
                    displayData = 'Some seats available'
                    icon = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9V20Z"/></svg>)
                }
                else if(displayData === 3) {
                    displayData = 'All seats occupied; standing space available'
                    icon = (<><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="currentColor"><path d="M18 16.5a4.5 4.5 0 0 1-4.5 4.5A4.499 4.499 0 0 1 9 16.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM4 28.333C4 24.787 10.33 23 13.5 23s9.5 1.787 9.5 5.333V36H4v-7.667ZM39 16.5a4.5 4.5 0 0 1-4.5 4.5a4.499 4.499 0 0 1-4.5-4.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM27 15a3 3 0 1 1-6 0a3 3 0 1 1 6 0Zm-2 13.333C25 24.787 31.33 23 34.5 23s9.5 1.787 9.5 5.333V36H25v-7.667Z"/><path fill-rule="evenodd" d="M28.75 22.185c-.266.098-.53.202-.788.313c-1.17.5-2.353 1.176-3.272 2.08c-.246.243-.48.508-.69.797a6.48 6.48 0 0 0-.69-.797c-.919-.904-2.101-1.58-3.273-2.08a16.46 16.46 0 0 0-.788-.313C20.772 21.396 22.73 21 24 21c1.27 0 3.228.396 4.75 1.185Z" clip-rule="evenodd"/></g></svg>
                              <span> </span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 320 512"><path fill="currentColor" d="M112 48a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"/></svg>
                            </>
                            )
                }
                else if(displayData === 4) {
                    displayData = 'Fully crowded or packed'
                    icon = (<><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="currentColor"><path d="M18 16.5a4.5 4.5 0 0 1-4.5 4.5A4.499 4.499 0 0 1 9 16.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM4 28.333C4 24.787 10.33 23 13.5 23s9.5 1.787 9.5 5.333V36H4v-7.667ZM39 16.5a4.5 4.5 0 0 1-4.5 4.5a4.499 4.499 0 0 1-4.5-4.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM27 15a3 3 0 1 1-6 0a3 3 0 1 1 6 0Zm-2 13.333C25 24.787 31.33 23 34.5 23s9.5 1.787 9.5 5.333V36H25v-7.667Z"/><path fill-rule="evenodd" d="M28.75 22.185c-.266.098-.53.202-.788.313c-1.17.5-2.353 1.176-3.272 2.08c-.246.243-.48.508-.69.797a6.48 6.48 0 0 0-.69-.797c-.919-.904-2.101-1.58-3.273-2.08a16.46 16.46 0 0 0-.788-.313C20.772 21.396 22.73 21 24 21c1.27 0 3.228.396 4.75 1.185Z" clip-rule="evenodd"/></g></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="currentColor"><path d="M18 16.5a4.5 4.5 0 0 1-4.5 4.5A4.499 4.499 0 0 1 9 16.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM4 28.333C4 24.787 10.33 23 13.5 23s9.5 1.787 9.5 5.333V36H4v-7.667ZM39 16.5a4.5 4.5 0 0 1-4.5 4.5a4.499 4.499 0 0 1-4.5-4.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM27 15a3 3 0 1 1-6 0a3 3 0 1 1 6 0Zm-2 13.333C25 24.787 31.33 23 34.5 23s9.5 1.787 9.5 5.333V36H25v-7.667Z"/><path fill-rule="evenodd" d="M28.75 22.185c-.266.098-.53.202-.788.313c-1.17.5-2.353 1.176-3.272 2.08c-.246.243-.48.508-.69.797a6.48 6.48 0 0 0-.69-.797c-.919-.904-2.101-1.58-3.273-2.08a16.46 16.46 0 0 0-.788-.313C20.772 21.396 22.73 21 24 21c1.27 0 3.228.396 4.75 1.185Z" clip-rule="evenodd"/></g></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 320 512"><path fill="currentColor" d="M112 48a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"/></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 320 512"><path fill="currentColor" d="M112 48a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"/></svg>
                            </>
                            )
                }
                else{
                    displayData = ''
                }
                break
            case 'serv':
                if(displayData === 1) {
                    displayData = 'Ordinary'
                    icon = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83c.78-.78 2.05-.78 2.83 0c.78.78.78 2.05 0 2.83c-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5c-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z"/></svg>)
                }
                else if(displayData === 2) {
                    displayData = 'Express Non-AC'
                    icon = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79c.63-.9 1.88-1.12 2.79-.49c.9.64 1.12 1.88.49 2.79c-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76A5.01 5.01 0 0 0 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38a2.21 2.21 0 0 0-.99-.06h-.02a2.268 2.268 0 0 0-1.84 2.61l1.35 5.92A3.008 3.008 0 0 0 9.83 18h6.85l3.82 3l1.5-1.5l-5.77-4.5z"/></svg>)
                }
                else if(displayData === 3) {
                    displayData = 'Express AC'
                    icon = (<><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79c.63-.9 1.88-1.12 2.79-.49c.9.64 1.12 1.88.49 2.79c-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76A5.01 5.01 0 0 0 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38a2.21 2.21 0 0 0-.99-.06h-.02a2.268 2.268 0 0 0-1.84 2.61l1.35 5.92A3.008 3.008 0 0 0 9.83 18h6.85l3.82 3l1.5-1.5l-5.77-4.5z"/></svg>
                              <span> </span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.16 16.13l-2-1.15l.89-.24a1 1 0 1 0-.52-1.93l-2.82.76L14 12l2.71-1.57l2.82.76h.26a1 1 0 0 0 .26-2L19.16 9l2-1.15a1 1 0 0 0-1-1.74L18 7.37l.3-1.11a1 1 0 1 0-1.93-.52l-.82 3L13 10.27V7.14l2.07-2.07a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-.65.65V2a1 1 0 0 0-2 0v2.47l-.81-.81a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41L11 7.3v3L8.43 8.78l-.82-3a1 1 0 1 0-1.93.52L6 7.37L3.84 6.13a1 1 0 0 0-1 1.74l2 1.13l-.84.26a1 1 0 0 0 .26 2h.26l2.82-.76L10 12l-2.71 1.57l-2.82-.76A1 1 0 1 0 4 14.74l.89.24l-2 1.15a1 1 0 0 0 1 1.74L6 16.63l-.3 1.11A1 1 0 0 0 6.39 19a1.15 1.15 0 0 0 .26 0a1 1 0 0 0 1-.74l.82-3L11 13.73v3.13l-2.07 2.07a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l.65-.65V22a1 1 0 0 0 2 0v-2.47l.81.81a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.41L13 16.7v-3l2.57 1.49l.82 3a1 1 0 0 0 1 .74a1.15 1.15 0 0 0 .26 0a1 1 0 0 0 .71-1.23L18 16.63l2.14 1.24a1 1 0 1 0 1-1.74Z"/></svg>
                            </>)
                }
                else{
                    displayData = ''
                }
                break
            default:
        }
        
        return (
            <div className={`modeChoiceTable-item ${item} ${props.highlight === item ? 'highlight' : ''}`}>
                {icon !== '' && <>{icon}<br /></>}
                {displayData}
                <br />
                {
                    props.attribute === '' &&
                    <input 
                        type     ='radio'
                        name     ='Mode'
                        value    ={item}
                        onChange ={props.handleHighlight}
                    />
                }
            </div>
        )
    })

    return (
        <div className= 'row'>
            <div className='row-title'>{props.title}</div>
            <div className='row-items'>
                {rowItems}
            </div>
        </div>
    )
}