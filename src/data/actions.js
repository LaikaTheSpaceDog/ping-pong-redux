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

export const saveSettings = ({ player1Name, player2Name, winningScore, alternate }) => {
    return {
        type: "SAVE_SETTINGS",
        player1Name: player1Name,
        player2Name: player2Name, 
        winningScore: +winningScore,
        alternate: +alternate,
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