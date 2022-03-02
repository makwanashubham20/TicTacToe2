import BoardRow from "./BoardRow";

function Board(props) {
    return (
        <div id="board">
            <BoardRow rowid={0} changeValue={props.changeValue} value={props.board} />
            <BoardRow rowid={1} changeValue={props.changeValue} value={props.board} />
            <BoardRow rowid={2} changeValue={props.changeValue} value={props.board} />
            <button id="resetbutton" onClick={props.resetGame}>Reset Game</button>
        </div>
    );
}

export default Board;