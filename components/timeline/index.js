import TimeLineItem from './item'

export default function TimeLine(props) {
    return (
        <div class="d-flex justify-content-center pt-1">
            <div class="d-flex text-center tracking-status-intransit">
                <p class="tracking-status p-2"></p>
            </div>
            <div class="tracking-list">
                <h3 class="m-2">{props.title}</h3>
                {
                    props.items.map((item) => (
                        <TimeLineItem title={item.title} mp3={item.mp3}></TimeLineItem>
                    ))
                }
            </div>
        </div>
    )
}