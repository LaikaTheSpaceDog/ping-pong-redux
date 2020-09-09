import { connect } from "react-redux";
import Settings from "./Settings";
import { saveSettings } from "../../data/actions";
 
const mapStateToProps = state => {
    return {
        winningScore: state.winningScore,
        alternate: state.alternate
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (data) => dispatch(saveSettings(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);