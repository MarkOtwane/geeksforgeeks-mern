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

