import { connect } from "react-redux";
import Table from "./Table";

const mapStateToProps = ({previousGames}) => {
    return {
        previousGames: previousGames,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClear:  () => dispatch({ type: "CLEAR" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);