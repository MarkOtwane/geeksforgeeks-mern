#Tuples
fruits = ("Mango", "Apple", "Oranges", "chillie")
# unchangeable
# print(type(fruits))

list = ["Apple", "Mango", "Oranges"]
list12 = ["Apple", "Mango", "Oranges"]
# print(type(list))
 #add items in a list
list.append("Bananas")
list.insert(1, "kiwi")
list.extend(list12)
# print(list)

# remove
list.remove("Apple")
# print(list)
list.pop(2)
del list[1]
# list.clear()
# print(list)

# loops
# for x in list:
#     print(x)

# for i in range(len(list)):
#     print(list[i])

# ### while loop
# i = 0
# while i < len(list):
#     print(list[i])
#     i = i + 1

# list comprehesion
# [print(x) for x in list]

# sorting list
list.sort(reverse=True)
print(list)

# function
# def my_list(n):
#     return abs(n-10)

myList = [100, 20, 50, 60]
# myList.sort(key = my_list)
# print(myList)
# list.reverse()
# print(list)

# copy list
ml = myList.copy()
print(ml)

ml1 = ml + list
print(ml1)

