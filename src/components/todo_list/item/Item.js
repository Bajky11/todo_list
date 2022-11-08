import './Item.css'
import CrossButton from '../../buttons/CrossButton';

const Item = ({ item, onDelete, onComplete }) => {

    return (
        <div className="item" style={{
            textDecoration: item.completed ? "line-through" : "",
        }}>
            <p>{item.title}</p>
            <CrossButton onClick={() => { onDelete(item.id) }}></CrossButton>
            <button onClick={() => { onDelete(item.id) }}>X</button>
            <button onClick={() => { onComplete(item.id) }}>✓</button>
        </div>
    );
}

export default Item;