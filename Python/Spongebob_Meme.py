# Convert string into a string that alternates uppercase and lowercase

"""
Given a string, return a string that has alternating capitalization

Ex) 'Hello World' ==> 'HeLlO wOrLd'
"""


def spongebob_meme(sentence):
    """
    Converts the given string into sponge case. Sponge case is alternating uppercase letter followed by a lowercase letter.
    ex) Hello World --> HeLlO wOrLd

    Parameters
    ----------
    sentence : The sentence that will be converted to sponge case.

    Return
    ----------
    sponge_case : Explicitly returns the sentence converted into sponge case.
    """

    # declare variables
    sponge_case = ""
    counter = True

    for i in sentence:
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
