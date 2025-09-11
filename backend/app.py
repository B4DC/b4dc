from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # <-- this enables CORS for all routes

@app.route('/api/burger')
def get_burger():
    return jsonify({"item": "burger", "price": 6.99})

@app.route('/api/hotdog')
def get_hotdog():
    return jsonify({"item": "hotdog", "price": 3.99})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
