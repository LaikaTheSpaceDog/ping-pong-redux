import { connect } from "react-redux";
import Score from "../Score";
import { patchScore } from "../../data/actions/api";

const mapStateToProps = ({ player1, server1, winner, player1Name }) => {
    return {
        player: player1,
        serving: server1,
        winner: winner,
        name: player1Name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement: () => {
            dispatch(patchScore(1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);