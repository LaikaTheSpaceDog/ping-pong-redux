export const increment1 = () => {
    return {
        type: "INCREMENT_PLAYER_1",
    };
};

export const increment2 = () => {
    return {
        type: "INCREMENT_PLAYER_2",
    };
};

export const clear = () => {
    return {
        type: "CLEAR",
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const saveSettings = ({ player_1, player_2, winning_score, change_serve, id }) => {
    return {
        type: "SAVE_SETTINGS",
        player1Name: player_1.name,
        player2Name: player_2.name, 
        winningScore: +winning_score,
        alternate: +change_serve,
        id: +id
    };
};

export const languageEng = () => {
    return {
        type: "LANGUAGE",
        language: "english"
    }
} 

export const languageRus = () => {
    return {
        type: "LANGUAGE",
        language: "russian"
    }
} 

export const loaded = () => {
    return {
        type: "loaded",
    };
};

export const apiScore = ({ player_1, player_2 }) => {
    return {
        type: "apiScore",
        player1: player_1.score,
        player2: player_2.score
    }
}