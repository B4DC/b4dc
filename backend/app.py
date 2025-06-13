from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/burger')
def get_burger():
    return jsonify({"item": "burger", "price": 7000})

@app.route('/api/hotdog')
def get_hotdog():
    return jsonify({"item": "hotdog", "price": 5000})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
