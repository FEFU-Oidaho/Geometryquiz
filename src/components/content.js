import { useState } from 'react';

import '../style/index.css';
import '../style/content.css';


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


let Content = (props) => {
    const formStartContainers = (questions_data) => {
        let feed = [];
        let conts = [];
        questions_data.forEach(q_element => {
            q_element.answers.forEach((a_element, index) => {
                feed.push(
                    {
                        id: `card_${q_element.question_id}_${index}`, 
                        img: a_element
                    }
                )
            });

            conts.push(
                {
                    id: `question_${q_element.question_id}`,
                    text: q_element.text,
                    items: []
                }
            );
        })
        
        conts.push({
            id: "feed",
            items:  shuffle(feed)
        });

        return conts;
    }
    
    const check_answers = () => {


    }

    
    let defaultConts = formStartContainers(props.task.questions);

    const [draggedItem, setDraggedItem] = useState(null);
    const [draggedFrom, setDraggedFrom] = useState(null);
    const [containers, setContainers] = useState(defaultConts);
    
    const onDragStart = (event, containerIndex, itemIndex) => {
        setDraggedItem(itemIndex);
        setDraggedFrom(containerIndex);
        event.dataTransfer.effectAllowed = 'move';
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const onDrop = (event, containerIndex) => {
        if (draggedFrom === null || draggedItem === null) return;

        const draggedItemData = containers[draggedFrom].items[draggedItem];

        if (draggedFrom === containerIndex) {
            return;
        }

        let newContainers = [...containers];
        newContainers[draggedFrom].items = newContainers[draggedFrom].items.filter((_, index) => index !== draggedItem);
        newContainers[containerIndex].items = [...newContainers[containerIndex].items, draggedItemData];

        setContainers(newContainers);
        setDraggedItem(null);
        setDraggedFrom(null);
    };

    const backToDefault = () => {
        setContainers(defaultConts); 
    }

    return (
        <>
            <div className={"content"}>

                <div className={"plate image"}>
                    <img src={ props.task.image_path } draggable='false'/>
                </div>

                <div className={"plate questions"}>
                    <div className={"question_text archivo-black-800"}>
                        { containers[0].text }
                    </div>
                    <div className={"question_answers"} key={ containers[0].id } onDragOver={ onDragOver } onDrop={(event) => onDrop(event, 0)}>
                        { containers[0].items.map((item, index) => (
                            <div 
                                className={"plate card"} 
                                key={item.id} 
                                draggable 
                                onDrag={ (event) => onDragStart(event, 0, index) }
                            >
                                <img src={item.img} draggable='false'/>
                            </div>
                        ))}
                    </div>
                    <div className={"question_text archivo-black-800"}>
                        { containers[1].text }
                    </div>
                    <div className={"question_answers"} key={ containers[1].id } onDragOver={ onDragOver } onDrop={(event) => onDrop(event, 1)}>
                        { containers[1].items.map((item, index) => (
                                <div 
                                    className={"plate card"} 
                                    key={item.id} 
                                    draggable 
                                    onDrag={ (event) => onDragStart(event, 1, index) }
                                >
                                    <img src={item.img} draggable='false'/>
                                </div>
                            ))}
                    </div>
                    <div className={"question_text archivo-black-800"}>
                        { containers[2].text }
                    </div>
                    <div className={"question_answers"} key={ containers[2].id } onDragOver={ onDragOver } onDrop={(event) => onDrop(event, 2)}>
                        { containers[2].items.map((item, index) => (
                            <div 
                                className={"plate card"} 
                                key={item.id} 
                                draggable 
                                onDrag={ (event) => onDragStart(event, 2, index) }
                            >
                                <img src={item.img} draggable='false'/>
                            </div>
                        ))}
                    </div>
                    <div className={"button "}>
                        <input type='button' value={"Проверить"} className='archivo-black-800'></input>
                        <input type='submit' value={"Очистить"} className='archivo-black-800' onClick={ backToDefault }></input>
                    </div>
                </div>

                <div className={"plate feed"} id={ containers[3].id } onDragOver={ onDragOver } onDrop={(event) => onDrop(event, 3)}>
                    {containers[3].items.map((item, index) => (
                        <div 
                            className={"plate card"} 
                            key={item.id} 
                            draggable 
                            onDrag={ (event) => onDragStart(event, 3, index) }
                        >
                            <img src={item.img} draggable='false'/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};


/*

                    { containers.filter((container, container_index) => {
                            if (container_index < containers.length - 1) {
                                return (
                                    <>
                                        <div className={"question_text archivo-black-800"}>
                                            { container.text }
                                        </div>
                                        <div className={"question_answers"} key={ container.id } onDragOver={ onDragOver } onDrop={(event) => onDrop(event, container_index)}>
                                            { container.items.map((item, index) => (
                                                <div 
                                                    className={"plate card"} 
                                                    key={item.id} 
                                                    draggable 
                                                    onDrag={ (event) => onDragStart(event, container_index, index) }
                                                >
                                                    <img src={item.img} draggable='false'/>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
*/


export default Content;