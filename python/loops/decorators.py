# def print_msg(message):
#     greetings = "Hello"

#     def print_it():
#         print(greetings, message)

#     print_it()
# print_msg("MARK IS GREAT")

def dec_1(func_1):
    def exe():
        print("Executing it now")
        func_1()
        print("Executed the function")
    return exe

def who_are_we():
    print("We are the weathiest in the planet")

who_are_we = dec_1(who_are_we)
who_are_we()