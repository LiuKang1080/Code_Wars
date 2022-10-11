import random


def daily_task_manager():
    """
    Task Manager program
    - Given a list with 8 tasks, randomly select 5 out of 7 tasks and return the result.

    Parameters
    ----------
    none

    Return
    ----------
    todo_tasks [list] - A list containing the randomly generated tasks to do for the day.

    - Set the tasks as an array (tasks_remaining)
    - Declare variables (todo_tasks)
    - Loop through 5 times, since we want to do 5 tasks out of 7
    - On each iteration get a random number and index the tasks_remaining list with the random number
    - Append the element to the todo_tasks list
    - Remove the element from the tasks_remaining list (no repeated tasks)
    - Sort the todo_tasks list
    - Return todo_tasks
    """
    # declare variables:
    # set the list with the tasks
    tasks_remaining = [1, 2, 3, 4, 5, 6, 7]
    todo_tasks = []

    # loop through a total of 5 times (complete 5 out of 7 tasks)
    for i in range(5):
        """
        - Find the legnth of the array
        - Get random number from 0 to the length of array
        - The random number is the index, use index to remove the number in tasks_remaining and add it to todo_tasks
        """
        random_num = random.randint(0, len(tasks_remaining) - 1)

        # add the element to the todo_tasks
        todo_tasks.append(tasks_remaining[random_num])

        # remove the element from tasks_remaining
        tasks_remaining.remove(tasks_remaining[random_num])

    todo_tasks.sort()
    return todo_tasks


print(daily_task_manager())
