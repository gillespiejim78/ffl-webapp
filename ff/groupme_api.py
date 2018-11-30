import requests

url = 'https://api.groupme.com/v3/groups/'
bot_url = 'https://api.groupme.com/v3/bots/post'
bot_id = ''
access_token = ''
group_id = '2509719'


def get_groups():
    resp = requests.get(url + group_id,
                        params={'access_token': access_token})
    return resp.json()['response']


def get_messages():
    resp = requests.get(url + group_id + '/messages',
                        params={'access_token': access_token})
    return resp.json()['response']['messages']


def post_bot_message(message_text):
    requests.post(bot_url,
                  data={'bot_id': bot_id, 'text': message_text})

