import { connect } from "react-redux";
import Score from "../Score";

const mapStateToProps = ({ player1, server1, winner }) => {
    return {
        player: player1,
        serving: server1,
        winner: winner,
        name: "Player 1"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement:  () => dispatch({ type: "INCREMENT_PLAYER_1" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);