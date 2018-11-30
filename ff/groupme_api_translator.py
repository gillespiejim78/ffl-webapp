import ff.groupme_api as gm_api
import json


# {
#   'group': {'groupName': '', 'imageUrl': ''}
#   'messages': [{'text': '', 'avatarUrl': '', 'userName': ''}, {}, ...]
# }
# IDEA: use ESPN avatars in place of groupme avatars, integrate ESPN and groupme
def get_messages():
    group_info = gm_api.get_groups()
    message_info = gm_api.get_messages()

    resp_dict = {}
    resp_dict['group'] = format_group(group_info)
    resp_dict['messages'] = format_messages(message_info)

    json_string = json.dumps(resp_dict)
    return json_string


def format_group(group_info):
    resp = {}
    resp['groupName'] = group_info['name']
    resp['imageUrl'] = group_info['image_url']
    return resp


def format_messages(message_info):
    resp = []
    for message in message_info:
        resp.append({'text': message['text'], 'avatarUrl': message['avatar_url'], 'userName': message['name']})

    return resp
