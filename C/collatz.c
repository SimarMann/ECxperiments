// Collatz conjecture
#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>

int collatz(int n);
bool islargedigit(char digit[]);

int main(int argc, string argv[])
{
  if (argc > 2) // check for only one argument
  {
    return 1;
  }

  if (!islargedigit(argv[1])) // check if argument only consists of digits
  {
    return 2;
  }

  int number = atoi(argv[1]); //convert argument to type int
  return printf("Number of steps to get to 1: %i\n", collatz(number));
}

// collatz conjecture; steps it takes to get to 1 from n
int collatz(int n)
{
  if (n == 1)
  {
    return 0;
  }
  else if (n % 2 == 0)
  {
    return 1 + collatz(n / 2);
  }
  else
  {
    return 1 + collatz(3 * n + 1);
  }
}

// Check if a string consists of only digits
bool islargedigit(char digit[])
{

  for (int i = 0, length = strlen(digit); i < length; i++)
  {

    if (!isdigit(digit[i]))
    {
      return false;
    }
  }
  return true;
}
