import TimeLineItem from './item'

export default function TimeLine(props) {
    return (
        <div className="d-flex justify-content-center pt-1">
            <div className="d-flex text-center tracking-status-intransit">
                <p className="tracking-status p-2"></p>
            </div>
            <div className="tracking-list">
                <h3 className="m-2">{props.title}</h3>
                {
                    props.items.map((item) => (
                        <TimeLineItem key="item.title" title={item.title} mp3={item.mp3}></TimeLineItem>
                    ))
                }
            </div>
        </div>
    )
}