import random
tarot = {1:"The Magician",2:"The High Priestess",3:"The Empress",
4:"The Emperor",5:"The Hierophant",6:"The Lovers",7:"The Chariot",
8:"Strength",9:"The Hermit",10:"Wheel of Fortune",11:"Justice",
12:"The Hanged Man",13:"Death",14:"Temperance",15:"The Devil",16:"The Tower",
17:"The Star",18:"The Moon",19:"The Sun",20:"Judgement",21:"The World",
22:"The Fool",23:"Ace of Clubs",24:"2 of Clubs",25:"3 of Clubs",26:"4 of Clubs",
27:"5 of Clubs", 28:"6 of Clubs",29:"7 of Clubs",30:"8 of Clubs",31:"9 of Clubs",
32:"10 of Clubs",33:"Ace of Hearts",34:"2 of Hearts",35:"3 of Hearts",
36:"4 of Hearts",37:"5 of Hearts",38:"6 of Hearts",39:"7 of Hearts",
40:"8 of Hearts",41:"9 of Hearts",42:"10 of Hearts",43:"Ace of Swords",
44:"2 of Swords",45:"3 of Swords",46:"4 of Swords",47:"5 of Swords",
48:"6 of Swords",49:"7 of Swords",50:"8 of Swords",51:"9 of Swords",
52:"10 of Swords",53:"Ace of Pentacles",54:"2 of Pentacles",55:"3 of Pentacles",
56:"4 of Pentacles",57:"5 of Pentacles",58:"6 of Pentacles",59:"7 of Pentacles",
60:"8 of Pentacles",61:"9 of Pentacles",62:"10 of Pentacles"}

spread = {}
decksize = len(tarot)

spread["past"] = tarot.pop(random.randint(1,decksize))
spread["present"] = tarot.pop(random.randint(1, decksize -1))
spread["future"] = tarot.pop(random.randint(1, decksize -2))

for key, value in spread.items():
    print("Your "+key+" is the "+value+" card. ")

