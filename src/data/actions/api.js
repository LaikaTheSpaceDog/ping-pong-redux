import axios from "../../axios";
import { loaded, saveSettings, apiScore } from "./state";

export const getScores = () => {
    return (dispatch) => {
        axios.get("/").then(({ data }) => {
            dispatch(loaded(data.data));
        });
    };
};

export const postSettings = ({ player1Name, player2Name, winningScore, alternate }) => {
    return (dispatch) => {
        axios.post("/", {
            player_1: player1Name,
            player_2: player2Name,
            winning_score: winningScore,
            change_serve: alternate
        }).then(({ data }) => {
            dispatch(saveSettings(data.data));
        } )
    }
}

export const patchScore = (player) => (dispatch, getState) => {

    const id = getState().id;

    axios.patch(`/${id}/score`, {
        player: player
    }).then(({ data }) => {
        dispatch(apiScore(data.data));
    });
};