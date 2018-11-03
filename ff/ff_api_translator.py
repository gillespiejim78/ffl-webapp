import ff.ff_api as ff_api
import json


def get_team_rankings():
    teams = ff_api.fetch_teams()
    rankings = [None] * len(teams)
    for team in teams:
        rankings[team['overallStanding']-1] = team['teamId']

    return rankings


def get_teams():
    teams = ff_api.fetch_teams()
    dict_list = [None] * len(teams)
    for team in teams:
        team_info = {}
        team_info['teamName'] = team['teamLocation'] + ' ' + team['teamNickname']
        team_info['teamId'] = team['teamId']
        team_rank = team['overallStanding'] - 1
        dict_list[team_rank] = team_info

    json_string = json.dumps(dict_list)
    return json_string
