import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => {
    return {
        language: state.language
    };
};


export default connect(mapStateToProps)(Header);