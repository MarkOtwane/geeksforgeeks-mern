# Positional Arguments


# def numbers(n1, n2):
#     sum = n1 + n2
#     return sum

# marks = numbers(12, 32)
# print("The result of the child is " + str(marks))

# Default Argument
# def marks(n1 = 20, n2 = 300):
#     sum = n1 + n2
#     return sum

# result = marks(6.6)
# print(result)

#  Key word argument
# def greetings(name,message):
#     print("Hello", name)
#     print(message)

# greetings("Mark", "You're a software engineer")

# *args
# def funt(*kid):
#     print("The smallest kid is " + kid[2])

# funt("Mark", "Steve", "Joe", "Moraa")

# kwargs
# def function(child3, child8, child5, child7, child1):
#     print("The cutest child among all is " + child1)

# function("Mark", "Steve", "Joe", "Ken","Moraa")

# Arbitrary keyword arguments **kwargs


def my_func(**kids):
    print("His height is the smallest among all " + kids["last_name"])

my_func(fname= 'Abs', last_name = 'XYZ')