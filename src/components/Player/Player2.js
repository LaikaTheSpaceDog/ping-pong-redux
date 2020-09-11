import { connect } from "react-redux";
import Score from "../Score";
import { patchScore } from "../../data/actions/api";

const mapStateToProps = ({ player2, server1, winner, player2Name }) => {
    return {
        player: player2,
        serving: !server1,
        winner: winner,
        name: player2Name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement: () => {
            dispatch(patchScore(2));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);