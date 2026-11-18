// Formato riga: Nome | Ingredienti | Allergeni | Prezzo €
// Allergeni: L lattosio, G glutine, U uovo, F frutta a guscio, C crostacei, M molluschi, P pesce
// Per modificare il menù basta cambiare/aggiungere righe qui sotto.
const ALLERGENI={L:'lattosio',G:'glutine',U:'uovo',F:'frutta a guscio',C:'crostacei',M:'molluschi',P:'pesce'};
const MENU=[
{id:'classiche',nome:'Le Classiche',righe:`
Margherita|Pomodoro, mozzarella|LG|6
Napoli|Pomodoro, mozzarella, acciughe|LG|8
Marinara|Pomodoro, aglio, origano|G|6
Romana|Pomodoro, mozzarella, capperi, acciughe|LG|8
Diavola|Pomodoro, mozzarella, salame piccante|LG|8
Quattro Stagioni|Pomodoro, mozzarella, prosciutto cotto, carciofi, funghi, olive nere|LG|9
Quattro Formaggi|Pomodoro, mozzarella, zola, scamorza affumicata, grana|LG|9
Gorgonzola|Pomodoro, mozzarella, zola|LG|8
Capricciosa|Pomodoro, mozzarella, prosciutto cotto, carciofi, funghi, olive, acciughe|LG|10
Prosciutto e Funghi|Pomodoro, mozzarella, prosciutto cotto, funghi|LG|9
Prosciutto|Pomodoro, mozzarella, prosciutto cotto|LG|8
Parma|Pomodoro, mozzarella, prosciutto crudo|LG|9
Olive|Pomodoro, mozzarella, olive nere|LG|8
Caprese|Pomodoro, mozzarella, pomodorini freschi, origano|LG|8
Pugliese|Pomodoro, cipolla, grana|LG|7`},
{id:'sfiziose',nome:'Le Sfiziose',righe:`
Calamari*|Pomodoro, mozzarella, calamari fritti|LG|12
Tonno e Cipolla|Pomodoro, mozzarella, tonno, cipolla|LG|9
Modella|Pomodoro, mozzarella di bufala|LG|8
Focaccia|Olio extra vergine, origano|G|5
Tirolese|Pomodoro, mozzarella, speck|LG|8
Calabrese|Pomodoro, mozzarella, peperoni, olive nere, acciughe, capperi, salame piccante|LG|10
Calzone farcito|Pomodoro, mozzarella, prosciutto cotto, carciofi, funghi|LG|9
Calzone special|Pomodoro, mozzarella, salame piccante, ricotta|LG|9
Arnold|Pomodoro, mozzarella, cipolla, wurstel, grana|LG|9
Reale|Pomodoro, mozzarella, scamorza affumicata, speck|LG|9
Bismark|Pomodoro, mozzarella, asparagi, uovo, grana|LGU|9
Occhio di bue|Pomodoro, mozzarella, prosciutto cotto, uovo, grana|LGU|9
Rustica|Pomodoro, mozzarella, ricotta fresca, prosciutto cotto, uovo|LGU|9
Portoghese|Pomodoro, mozzarella, asparagi, cipolla, grana, peperoni|LG|10
Ghiotta*|Pomodoro, mozzarella, spinaci, carciofi, zola, grana|LG|10
Luganega|Pomodoro, mozzarella, salsiccia fresca|LG|8
Calzone liscio|Pomodoro, mozzarella, prosciutto cotto|LG|8
Rucola|Pomodoro, mozzarella, rucola|LG|8
Wurstel|Pomodoro, mozzarella, wurstel|LG|8
Siciliana|Pomodoro, capperi, acciughe, olive nere|G|8
Ortolana|Pomodoro, mozzarella, melanzane, peperoni, zucchine|LG|9
Parmigiana|Pomodoro, mozzarella, melanzane, grana|LG|8
Porcini|Pomodoro, mozzarella, porcini|LG|8
Mister Potato|Pomodoro, mozzarella, patatine fritte|LG|8`},
{id:'speciali',nome:'Le Speciali',righe:`
Delicata|Pomodoro, mozzarella, panna da cucina, prosciutto crudo|LG|9
Tirolo|Pomodoro, mozzarella, brie, speck in cottura|LG|8
Romantica|Pomodoro, mozzarella, porcini, salame dolce|LG|9
Porcini e zola|Pomodoro, mozzarella, zola, porcini|LG|9
Denny|Pomodoro, mozzarella, pesto, porcini, zola, olive nere|LGF|10
Americana*|Pomodoro, mozzarella, wurstel, patatine fritte|LG|9
Italy*|Pomodoro, mozzarella, salsiccia fresca, patatine fritte|LG|9
Sfiziosa|Mozzarella, pomodorini freschi, rucola, prosciutto crudo, scaglie di grana, basilico|LG|10
Johnny|Mozzarella, zola, cipolla, uova, speck|LGU|9
Melinda|Mozzarella, zola, mela|LG|8
Trevisana|Mozzarella, radicchio, scamorza affumicata, salame piccante|LG|8
Amalfitana*|Pomodoro, mozzarella, frutti di mare, calamari fritti|LGCM|12
Preziosa|Pomodoro, mozzarella, gamberetti in salamoia, rucola|LGC|9
Principe|Pomodoro, mozzarella, brie, salmone affumicato|LGP|9
Scozia|Pomodoro, mozzarella, salmone affumicato|LGP|8
Lady|Pomodoro, mozzarella, asparagi, funghi porcini, grana|LG|10
Prataiola|Pomodoro, mozzarella, zola, funghi, rucola|LG|9
Deliziosa|Pomodoro, mozzarella, scamorza affumicata, bresaola|LG|9
Catalana|Pomodoro, mozzarella, pomodorini freschi, bresaola|LG|9
Fantasia del pizzaiolo*|Comunicate le eventuali allergie||10
Pizza Famiglia Margherita|Formato ideale da condividere (anche con mozzarella senza lattosio su richiesta)|LG|15`},
{id:'fritti',nome:'Sfizioserie fritte e proposte',righe:`
Crocchette di patate*|||4
Verdure in pastella*|||4
Patatine fritte*|||4
Olive all'ascolana*|||4
Fritto di calamari*|||13
Panzerotti|Pomodoro, mozzarella, prosciutto cotto||8`}
];
