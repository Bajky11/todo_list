import '../buttons/Buttons.css'

const CrossButton = ({ onClick }) => {
    return (
        <div
            className="cross-button"
            onClick={onClick}
        />
    );
}

export default CrossButton;