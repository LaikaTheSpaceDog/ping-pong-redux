import axios from "../../axios";
import { loaded, saveSettings } from "./state";

export const getScores = () => {
    return (dispatch) => {
        axios.get("/ping-pong/games").then(({ data }) => {
            dispatch(loaded(data.data));
        });
    };
};

export const postSettings = ({ player1Name, player2Name, winningScore, alternate }) => {
    return (dispatch) => {
        axios.post("/ping-pong/games", {
            player_1: player1Name,
            player_2: player2Name,
            winning_score: winningScore,
            change_serve: alternate
        }).then(({ data }) => {
            dispatch(saveSettings(data.data));
        } )
    }
}