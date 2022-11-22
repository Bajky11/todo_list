const Input = ({ title, component }) => {

    return (
        <div className="screen">
            <h1>{title}</h1>
            {component}
        </div>

    );
}

export default Input;