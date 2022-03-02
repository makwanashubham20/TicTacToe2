function ListofSteps(props) {
     var element;
    if (props.isWinner !== "") {
        var winner = props.isWinner;
        element = <p>Winner: {winner}</p>
    }
    else {
        element = <p>Next player: {props.next}</p>
    }

    var switches = [];
    for (let i = 0; i <= props.stepCount; i++) {
        let isCurrent = props.stepid === i;
        if (i === 0) {
            switches.push(<button disabled={isCurrent} onClick={() => props.changeBoard(i)}>Go to game start</button>)
        }
        else {
            switches.push(<button disabled={isCurrent} onClick={() => props.changeBoard(i)}>Go to move #{i}</button>)
        }
    }

    return (
        <div id="playerlist">
            <div>
                {element}
            </div>
            <ol>
                {switches.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        </div>
    );
}

export default ListofSteps;