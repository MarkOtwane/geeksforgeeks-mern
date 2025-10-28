# store data in key and value pair.
mydict = {
    "brand":"Ford",
    "Model":"Mustang",
    "year": 1998,
    "exist": True
}
# print(mydict)
# type casting
# print(type(mydict["year"]))
# accessing items
#get keys method
x = mydict.keys()
y = mydict.values()
z = mydict.items()
# Change value
mydict["year"] = 2021
mydict.update({"year" : 2025})

mydict["color"] = "red"
print(mydict)

del mydict["color"]
print(mydict)

# mydict.clear()
# print(mydict)

# loops
# for x in mydict.values():
#     print(x)

for x in mydict.keys():
    print(x)

for x, y in mydict.items():
    print(x, y)

# Nested dictionary
child1 = {
    "name":"Mark",
    "year":2030
}

child2 = {
    "name":"Mak",
    "year":2032
}

child3 = {
    "name":"Mrak",
    "year":2035
}

fam = {
    "fam1": child1,
    "fam2":child2,
    "fam3": child3
}

print(fam)