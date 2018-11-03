from flask import (
    Flask
)
import ff.ff_api_translator as api

app = Flask(__name__)


@app.route('/')
def getTeams():
    return api.get_teams()


if __name__ == '__main__':
    print(api.get_teams())
    app.run(debug=True)
