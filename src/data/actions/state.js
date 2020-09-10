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

export const saveSettings = ({ player_1, player_2, winning_score, change_serve }) => {
    return {
        type: "SAVE_SETTINGS",
        player1Name: player_1,
        player2Name: player_2, 
        winningScore: +winning_score,
        alternate: +change_serve,
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