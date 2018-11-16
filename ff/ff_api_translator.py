import ff.ff_api as ff_api
import json


def get_teams():
    teams = ff_api.fetch_teams()
    dict_list = [None] * len(teams)
    for team in teams:
        team_info = {}
        team_info['teamName'] = team['teamLocation'] + ' ' + team['teamNickname']
        team_info['teamId'] = team['teamId']
        team_info['record'] = str(team['record']['overallWins']) + '-' + \
                              str(team['record']['overallLosses']) + '-' + \
                              str(team['record']['overallTies'])
        team_rank = team['overallStanding'] - 1
        dict_list[team_rank] = team_info

    json_string = json.dumps(dict_list)
    return json_string


# [
#   [{'teamName': 'Ertz', 'score': 31, 'logoUrl': 'logo.jpg'}, {'teamName': 'Hav', 'score': 0, 'logoUrl': 'logo.jpg'}],
#   [{}, {}],
#   [{}, {}]
# ]
def get_current_scoreboard():
    scoreboard = ff_api.fetch_scoreboard()
    matchups = scoreboard['matchups']
    dict_list = []
    for matchup in matchups:
        matchup_team_info_list = [None] * 2
        matchup_team_info_list[0] = get_team_score(matchup['teams'][0])
        matchup_team_info_list[1] = get_team_score(matchup['teams'][1])
        dict_list.append(matchup_team_info_list)

    json_string = json.dumps(dict_list)
    return json_string


def get_team_score(team_scoreboard):
    team_score = {}
    team_score['teamName'] = team_scoreboard['team']['teamLocation'] + ' ' + \
                             team_scoreboard['team']['teamNickname']
    team_score['score'] = team_scoreboard['score']
    team_score['logoUrl'] = team_scoreboard['team']['logoUrl']

    return team_score

