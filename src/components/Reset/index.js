import { connect } from "react-redux";
import Reset from "./Reset";
import { postReset } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleReset:  (data) => dispatch(postReset(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);