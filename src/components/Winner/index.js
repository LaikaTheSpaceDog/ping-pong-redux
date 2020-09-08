import { connect } from "react-redux";
import Winner from "./Winner";

const mapStateToProps = ({winner, player1, player2}) => {
    return {
        winner: winner,
        player1: player1,
        player2: player2
    };
};

export default connect(mapStateToProps)(Winner);