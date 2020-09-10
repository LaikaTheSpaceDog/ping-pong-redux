import { connect } from "react-redux";
import Settings from "./Settings";
import { postSettings } from "../../data/actions/api";
 
const mapStateToProps = state => {
    return {
        winningScore: state.winningScore,
        alternate: state.alternate,
        language: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (data) => {
            dispatch(postSettings(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);