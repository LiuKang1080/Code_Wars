# Convert string into a string that alternates uppercase and lowercase

"""
Given a string, return a string that has alternating capitalization

Ex) 'Hello World' ==> 'HeLlO wOrLd'
"""


def spongebob_meme(str):
    # declare variables
    sponge_case = ""
    counter = True

    for i in str:
        if not i.isalpha():
            sponge_case += i
            continue

        if counter:
            sponge_case += i.upper()
        else:
            sponge_case += i.lower()

        counter = not counter

    return sponge_case


print(spongebob_meme("Spongebob is really funny!"))
