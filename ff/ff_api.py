import requests


url = 'http://games.espn.com/ffl/api/v2/'
league_id = 765528


def fetch_scoreboard(week):
    resp = requests.get(
        url + 'scoreboard',
        params={'leagueId': league_id, 'seasonId': 2018, 'matchupPeriodId': week}
    )
    return resp.json()


def fetch_teams():
    resp = requests.get(
        url + 'teams',
        params={'leagueId': league_id, 'seasonId': 2018}
    )
    return resp.json()['teams']
