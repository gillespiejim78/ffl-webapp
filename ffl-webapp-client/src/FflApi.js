export const fetchRankings = () => 
    fetch('/api/rankings')
        .then(function (response) {
                return response.json();
            }
        )

export const fetchScoreboard = () =>
    fetch('/api/scoreboard')
        .then(response => response.json());

export const fetchMessageBoard = () =>
    fetch('/api/messages')
        .then(response => response.json());

export default { fetchRankings, fetchScoreboard, fetchMessageBoard };