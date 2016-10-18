import csv

def convsubtoarray(fileName,faculty):
    file = open(fileName,'r')
    array=[]
    for line in file:
        record=line.strip()
        record = record.split(' ',1)
        unitCode=str(record[0])
        unitName=record[1]
        pair=[unitCode,unitName,faculty]
        array.append(pair)
    return array

import csv



def toCSV(array):
    CSVfileName = 'db.csv'
    fl = open(CSVfileName, 'w')

    writer = csv.writer(fl)
    writer.writerow(['UnitCode', 'UnitName', 'Faculty']) #if needed
    for values in array:
        writer.writerow(values)
    fl.close()

faculties = ['ada','arts','buseco','edu','eng','it','law','med','pha','sci']
newarray = []
for f in faculties:
    fileName = f + '.txt'
    array = convsubtoarray(fileName,f)
    newarray += array
toCSV(newarray)
