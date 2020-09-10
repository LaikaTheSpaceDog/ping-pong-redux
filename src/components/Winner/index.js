import { connect } from "react-redux";
import Winner from "./Winner";

const mapStateToProps = ({winner, player1, player2, player1Name, player2Name, language}) => {
    return {
        winner,
        player1,
        player2,
        player1Name,
        player2Name,
        language
    };
};

export default connect(mapStateToProps)(Winner);