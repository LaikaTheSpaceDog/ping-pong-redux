import { connect } from "react-redux";
import Table from "./Table";
import { clear } from "../../data/actions/state";

const mapStateToProps = ({ previousGames, language, player1Name, player2Name }) => {
    return {
        previousGames,
        language,
        player1Name,
        player2Name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClear:  () => dispatch(clear()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);