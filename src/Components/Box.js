function Box(props) {

    function handleClick() {
        if (props.value == "") {
            props.changeValue(props.rowid * 3 + props.colid);
        }
    }

    return (
        <button className='box' onClick={handleClick}>{props.value}</button>
    );
}

export default Box;