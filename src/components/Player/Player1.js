import { connect } from "react-redux";
import Score from "../Score";
import { increment1 } from "../../data/actions";

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
        handleIncrement:  () => dispatch(increment1()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);