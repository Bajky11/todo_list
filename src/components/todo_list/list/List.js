import Item from "../list_item/Item"
import './List.css'

const List = ({ items, resolveCompleted, deleteItem }) => {



    return (
        <div className="list">
            {
                items.map((element) => {
                    return (
                        <Item
                            item={element}
                            key={element.id}
                            onDelete={(id) => { deleteItem(id) }}
                            onComplete={(id) => { resolveCompleted(id) }}
                        />
                    )
                })
            }
        </div>
    );
}

export default List;