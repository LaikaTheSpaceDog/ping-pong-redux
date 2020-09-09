import { connect } from "react-redux";
import Winner from "./Winner";

const mapStateToProps = ({winner, player1, player2, player1Name, player2Name}) => {
    return {
        winner,
        player1,
        player2,
        player1Name,
        player2Name
    };
};

export default connect(mapStateToProps)(Winner);