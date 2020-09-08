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

export default connect(mapStateToProps)(Score);