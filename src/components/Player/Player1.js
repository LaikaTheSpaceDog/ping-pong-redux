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

export default connect(mapStateToProps)(Score);