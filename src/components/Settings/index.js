import { connect } from "react-redux";
import Settings from "./Settings";
import { saveSettings } from "../../data/actions";
 
const mapStateToProps = state => {
    return {
        winningScore: state.winningScore,
        alternate: state.alternate,
        language: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (data) => dispatch(saveSettings(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);