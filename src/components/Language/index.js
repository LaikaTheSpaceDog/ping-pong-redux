import { connect } from "react-redux";
import Language from "./Language";
import { languageEng, languageRus } from "../../data/actions/state";

const mapDispatchToProps = dispatch => {
    return {
        handleLanguageEnglish: () => dispatch(languageEng()),
        handleLanguageRussian: () => dispatch(languageRus())
    }
}

export default connect(null, mapDispatchToProps)(Language);