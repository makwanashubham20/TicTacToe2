import Box from "./Box";

function BoardRow({ rowid, changeValue, value }) {
    return (
        <div id="board-row">
            <Box rowid={rowid} colid={0} value={value[rowid * 3]} changeValue={changeValue} />
            <Box rowid={rowid} colid={1} value={value[rowid * 3 + 1]} changeValue={changeValue} />
            <Box rowid={rowid} colid={2} value={value[rowid * 3 + 2]} changeValue={changeValue} />
        </div>
    )
}


export default BoardRow;