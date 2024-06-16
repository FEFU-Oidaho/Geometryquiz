import '../style/index.css';
import '../style/feed.css';

let Feed = (props) => {
    const generateCards = (data) => {
        let cards = [];
        for (let key in data) {
            Object.values(data[key]).forEach((element, index) => {
                cards.push(
                    <Card image={ element } question={ Number(key) + 1 } card={ index + 1 }/>
                )
            })
        }
        return cards
    };

    const cards = generateCards(props.answers);

    return (
        <>
            <div className={"plate feed"}>
                { cards }
            </div>
        </>
    );
};

let Card = (props) => {
    return (
        <div className={"plate card"} id={`card_${props.question}_${props.card}`} draggable>
            <img src={props.image} />
        </div>
    )
}

export default Feed;