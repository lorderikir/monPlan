import csv

def convsubtoarray(fileName,faculty, outputFile):
    file = open(fileName,'r')
    for line in file:
        array=[]
        record=line.strip()
        record = record.split(' ',1)
        print(record)
        unitCode=str(record[0])
        unitName=record[1]
        pair=[unitCode,unitName]
        array.append([]) #appends record into array
        array[-1].append(pair)
    print(array)

convsubtoarray('ada.txt','','')
