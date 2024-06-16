import '../style/index.css';
import '../style/content.css';
import Image from './image';
import Questions from './questions';
import Feed from './feed';

let Content = (props) => {

    const get_image = (task_data) => {
        return task_data["image_path"];
    };

    const get_questions = (task_data) => {
        return task_data["questions"].map(e => {
            let question_id = e["question_id"];
            let question_text = e["text"];

            return { question_id : question_text }
        })
    };

    const get_answers = (task_data) => {
        return task_data["questions"].map(e => {
            let question_id = e["question_id"];
            let answers = e["answers"];

            return { question_id : answers }
        })
    };


    return (
        <>
            <div className={"content"}>
                <Image image={ get_image(props.task) }/>
                <Questions questions={ get_questions(props.task) }/>
                <Feed answers={ get_answers(props.task) }/>
            </div>
        </>
    );
};

export default Content;