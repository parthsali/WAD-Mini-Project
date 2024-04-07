from flask import Flask, request, jsonify
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    return jsonify({'message': 'File uploaded successfully'}), 200


if __name__ == '__main__':
    app.run(debug=True)
