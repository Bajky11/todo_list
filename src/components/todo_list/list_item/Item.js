import './Item.css'

const Item = ({ item, onDelete, onComplete }) => {

    return (
        <div className="item" style={{
            textDecoration: item.completed ? "line-through" : "",
        }}>
            <p>{item.title}</p>
            <button onClick={() => { onDelete(item.id) }}>X</button>
            <button onClick={() => { onComplete(item.id) }}>✓</button>
        </div>
    );
}

export default Item;