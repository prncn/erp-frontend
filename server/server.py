import flask
import db_connect as db
from flask import request, jsonify
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
app.config['DEBUG'] = True
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)

books = [
    {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]


@app.route('/')
def home():
    return 'FLASK API'


@app.route('/api/company', methods=['GET'])
@cross_origin()
def get_company_name_by_invoice_id():
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify an id."

    con, cur = db.init_db()
    blrc = 'select BLIEF_ID_LINKKEY, LRECHNR from BLRC where ID = ?'
    blief = 'select BADR_ID_ADRNR from BLIEF where ID = ?'
    badr = 'select NAME from BADR where ID = ?'

    blief_id = cur.execute(blrc, [id]).fetchall()[0][0]
    badr_id = cur.execute(blief, [blief_id]).fetchall()[0][0]
    name = cur.execute(badr, [badr_id]).fetchall()[0][0]

    return jsonify(name)


@app.route('/api/invoices', methods=['GET'])
@cross_origin()
def get_invoices():
    con, cur = db.init_db()
    blrc = 'select first 50 ID, MASKENKEY, LRECHNR, BLIEF_ID_LINKKEY, RECHDATUM, GESAMT, STATUS from BLRC'
    blief = 'select BADR_ID_ADRNR from BLIEF where ID = ?'
    badr = 'select NAME from BADR where ID = ?'

    invoices = []

    for row in cur.execute(blrc).fetchall():
        badr_id = cur.execute(blief, [row[3]]).fetchall()[0][0]
        name = cur.execute(badr, [badr_id]).fetchall()[0][0]
        invoice = {
            'ID': row[0],
            'MASKENKEY': row[1],
            'LRECHNR': row[2],
            'COMPANY': name,
            'RECHDATUM': row[4],
            'GESAMT': row[5],
            'STATUS': row[6]
        }

        invoices.append(invoice)
    
    return jsonify(invoices)


app.run()