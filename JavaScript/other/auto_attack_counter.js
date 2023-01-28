/*
Auto Attack Counter
    - Nocturne builds Kraken Slayer.
    - Every 3rd attack Kraken Slayer procs.
    - Every 4th attack Nocturne's passive procs

    - How many times does Kraken and Nocturne's passive proc when Nocturne attacks a total of 20 times?
*/


function auto_attack_counter(total_number_of_attacks) {
    /*
    Function takes in the total number of attacks, and prints the number of times Kraken and Nocturne's passive proc.
        - Set up variables:
            - number_of_attacks (for loop)
            - kraken_proc_count
            - passive_proc_count
            - total_kraken_proc
            - total_passive_proc
        - Loop from 0 to the max (total_number_of_attacks)
        - On each iteration increase number_of_attacks
        - On each iteraction check to see if kraken_proc_count is 3, if it's 3, increase total_kraken_proc by 1, and reset
            kraken_proc_count back to 0.
        - On each iteraction check to see if passive_proc_count is 4, if it's 4, increase total_passive_proc by 1, and reset
            passive_proc_count back to 0.
        - Loop until number_of_attacks = total_number_of_attacks
        - Print on data on each iteration.
        - Print total_kraken_proc and total_passive_proc.
    
    Parameters
    ----------
    total_number_of_attacks [int] : The total number of times Noturne attacks.

    Return
    ----------
    [string] : Print the number of times Kraken and Nocturne's passive proc.
    */

    // declare variables:
    let kraken_proc_count = 0;
    let passive_proc_count = 0;
    let total_kraken_proc = 0;
    let total_passive_proc = 0;

    // for loop:
    for (let number_of_attacks = 1; number_of_attacks <= total_number_of_attacks; ++number_of_attacks) {
        // increase counter for kraken and passive attacks:
        kraken_proc_count++;
        passive_proc_count++;
        
        // print out data:
        console.log("Attack Number: " + number_of_attacks);

        // check to see if kraken proc'd:
        if (kraken_proc_count === 3) {
            // print kraken proc
            console.log("Kraken proc'd");

            // incease total_kraken_proc
            total_kraken_proc++;

            // reset kraken counter:
            kraken_proc_count = 0;
        }

        // check to see if passive proc'd:
        if (passive_proc_count === 4) {
            // print passive proc
            console.log("Passive proc'd");
            
            // incease total_passive_proc
            total_passive_proc++;

            // reset passive counter:
            passive_proc_count = 0;
        }

        // print final data for each iteration:
        console.log("==========");
    }

    // print the total number of attacks
    console.log("\n");
    console.log("Total number of Attacks: " + total_number_of_attacks);
    console.log("Total number of Kraken procs: " + total_kraken_proc);
    console.log("Total number of Passive procs: " + total_passive_proc);
}


auto_attack_counter(20);
