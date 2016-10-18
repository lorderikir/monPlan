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
newarray = quicksort(newarray)
toCSV(newarray)

def partition(array, begin, end):
    pivot = begin
    for i in xrange(begin+1, end+1):
        if array[i] <= array[begin]:
            pivot += 1
            array[i], array[pivot] = array[pivot], array[i]
    array[pivot], array[begin] = array[begin], array[pivot]
    return pivot


def quicksort(array, begin=0, end=None):
    if end is None:
        end = len(array) - 1
    if begin >= end:
        return
    pivot = partition(array, begin, end)
    quicksort(array, begin, pivot-1)
    quicksort(array, pivot+1, end)
