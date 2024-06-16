import '../style/index.css';
import '../style/image.css';

let Image = (props) => {
    return (
        <>
            <div className={"plate image"}>
                <img src={ props.image } draggable='false'/>
            </div>
        </>
    );
};

export default Image;