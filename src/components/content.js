import '../style/index.css';
import '../style/content.css';
import Image from './image';
import Questions from './questions';
import Feed from './feed';

let Content = (props) => {
    return (
        <>
            <div className={"content"}>
                <Image/>
                <Questions/>
                <Feed/>
            </div>
        </>
    );
};

export default Content;