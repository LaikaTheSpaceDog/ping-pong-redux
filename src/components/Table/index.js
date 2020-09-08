import { connect } from "react-redux";
import Table from "./Table";

const mapStateToProps = ({previousGames}) => {
    return {
        previousGames: previousGames,
    };
};

export default connect(mapStateToProps)(Table);