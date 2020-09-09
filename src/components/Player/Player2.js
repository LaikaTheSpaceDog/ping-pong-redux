import { connect } from "react-redux";
import Score from "../Score";

const mapStateToProps = ({ player2, server1, winner }) => {
    return {
        player: player2,
        serving: !server1,
        winner: winner,
        name: "Player 2"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement:  () => dispatch({ type: "INCREMENT_PLAYER_2" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);