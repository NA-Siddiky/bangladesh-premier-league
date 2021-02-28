
const Player = (props) => {

    const [name, salary] = props.Player;

    return (
        <div>
            <h1>{name}</h1>
            <h3>{salary}</h3>
        </div>
    )


}

export default Player;