#Key Project Objectives:
#Store the names in an array/list
#Pair participants and output the pairs

import random

#assuming all elves are participating
santa_elves = ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Pam Beesly', 'Jan Levinson', 'Kevin Malone', 'Toby Flenderson', 'Angela Martin', 'Andy Bernard', 'Stanley Hudson', 'Ryan Howard', 'Kelly Kapoor']

#santa function
def secret_santa(x_lst):  
  random.shuffle(x_lst)
  i = 0
  while i < len(x_lst):
    print(f'{x_lst[i]} will be gifting some holiday flair to {x_lst[i + 1]}. ')
    i += 2
    return x_lst #to see one pair at a time or call function below for full list

secret_santa(santa_elves)


    
#example output  
#Jan Levinson will be gifting some holiday flair to Toby Flenderson. 
#>>> 
     

   