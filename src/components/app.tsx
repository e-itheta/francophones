import * as React from "react"
import "./app.css"

interface JSEvent {
    title: string,
    description: string,
    date: string,
};

function get_events(): Array<JSEvent>
{
    let request = new XMLHttpRequest()
    request.open("GET", "https://e-itheta.com/event", false);
    request.send();

    return JSON.parse(request.responseText)["message"]
}

function Event(props: JSEvent)
{
    return <div style={{border: "1px solid black"}}>
        <b>{props.title}</b> - {props.date} <br />
        {props.description}
    </div>
}

export default
function App(props: any)
{

    let events = () => 
    {
        let result = get_events()
        return result.map((elt, ind) => <Event {...elt} key={ind}/>)
    }

    return <div className="App">
        {props.children}
        <h3>Events</h3>
        {events ()}
    </div>
}
