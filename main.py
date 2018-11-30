from flask import (
    Flask,
    Response)
import ff.ff_api_translator as ff_api
import ff.groupme_api_translator as gm_api

app = Flask(__name__)


@app.route('/api/rankings')
def get_teams():
    resp = Response(ff_api.get_teams(), 200, mimetype='application/json')
    return resp


@app.route('/api/scoreboard')
def get_current_scoreboard():
    resp = Response(ff_api.get_current_scoreboard(), 200, mimetype='application/json')
    return resp


@app.route('/api/messages')
def get_messages():
    resp = Response(gm_api.get_messages(), 200, mimetype='application/json')
    return resp


if __name__ == '__main__':
    print(gm_api.get_messages())
    print(ff_api.get_current_scoreboard())
    print(ff_api.get_teams())
    app.run(debug=True)
