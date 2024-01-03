from flaskapp import app, mysql
from flask import jsonify

@app.route('/testconnection')
def test_connection():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT 1")
        return jsonify({"status": "Connected to the database"})
    except Exception as e:
        return jsonify({"status": "Connection failed", "error": str(e)})