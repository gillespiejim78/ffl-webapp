from flask import (
    Flask,
    Response)
import ff.ff_api_translator as api

app = Flask(__name__)


@app.route('/api/rankings')
def get_teams():
    resp = Response(api.get_teams(), 200, mimetype='application/json')
    return resp


@app.route('/api/scoreboard')
def get_current_scoreboard():
    resp = Response(api.get_current_scoreboard(), 200, mimetype='application/json')
    return resp

if __name__ == '__main__':
    print(api.get_current_scoreboard())
    print(api.get_teams())
    app.run(debug=True)
