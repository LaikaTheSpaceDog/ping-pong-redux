import { connect } from "react-redux";
import Table from "./Table";
import { clear } from "../../data/actions";

const mapStateToProps = ({ previousGames }) => {
    return {
        previousGames: previousGames,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClear:  () => dispatch(clear()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);