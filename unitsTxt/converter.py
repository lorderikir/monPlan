import csv

def convsubtoarray(fileName,faculty, outputFile):
    file = open(fileName,'r')
    for line in file:
        subdb=[]
        record=line.strip().split('\t')
        unitCode=str(record[0])
        unitName=record[1].split(',')
        for location in suburb:
            pair=[unitCode,unitName] #appends record into array
            array.append(pair)
