from flaskapp import app
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')

# from flaskapp import app, mysql
# from flask import jsonify

# @app.route('/testconnection')
# def test_connection():
#     try:
#         cursor = mysql.connection.cursor()
#         cursor.execute("SELECT 1")
#         return jsonify({"status": "Connected to the database"})
#     except Exception as e:
#         return jsonify({"status": "Connection failed", "error": str(e)})