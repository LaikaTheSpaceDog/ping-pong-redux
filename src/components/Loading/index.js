import { connect } from "react-redux";
import Loading from "./Loading";
import { getScores } from "../../data/actions/api";

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = ( dispatch ) => ({
    handleLoad: () => dispatch(getScores()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading);