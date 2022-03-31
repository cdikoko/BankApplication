import java.util.Scanner;

/**
 * This class will deal with displaying the user menu
 * A few examples have been made for you but you should improve and add more
 */
public class Menu {

    public void mainMenu() {
        System.out.println("Welcome to the bank app!");
        System.out.println("Please select one of the following options:");
        System.out.println("1. Checking");
        System.out.println("2. Savings");
        System.out.println("3. Exit");

        //add your code here
        Scanner scanner = new Scanner(System.in);
        String response = scanner.next();


        if (response.equals("1")) {

            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Exit");
             response = scanner.next();


        }

        if (response.equals("2")) {
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Exit");
            response = scanner.next();
        }

        if (response.equals("3")) {


        }

    }


}
