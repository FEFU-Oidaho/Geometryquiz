import '../style/index.css';
import '../style/questions.css';

let Questions = (props) => {

    const build_questions = (data) => {
        let q = []
        data.forEach((element, index) => {
            q.push(
                <Question text={ element } question={ index + 1 }/>
            )
        });
        return q;
    }

    let questions = build_questions(props.questions)

    return (
        <>
            <div className={"plate questions"}>
                { questions }
                <Button />
            </div>
        </>
    );
};

let Button = (props) => {
    return (
        <>
            <div className={"button "}>
                <input type='button' value={"Проверить"} className='archivo-black-800'></input>
            </div>
        </>
    )
}

let Question = (props) => {
    return (
        <>
            <div className={"question_text archivo-black-800"}>
                { props.text }
            </div>
            <div className={"question_answers"} id={`question_${props.question}`}>
                
            </div>
        </>
    )
}

export default Questions;