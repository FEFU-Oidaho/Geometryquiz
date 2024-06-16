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

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <>
            <div className={"plate feed"} id="feed">
                { shuffle(cards) }
            </div>
        </>
    );
};

let Card = (props) => {
    return (
        <div className={"plate card"} id={`card_${props.question}_${props.card}`} draggable>
            <img src={props.image} draggable='false'/>
        </div>
    )
}

export default Feed;