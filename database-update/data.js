
const arr = [{_id: 5,name: "Card 5"}];
db.cards.insertMany(arr);

const cursor = db.cards.find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}