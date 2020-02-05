#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char cArray[15] = {'m', 'i', 'n', 'e', '\0', '-', 'c', '\0', '1', '0', '\0', '2', '.', '0', '\0'};
int main(void)
{
  char *z = &cArray[0];
  char **t = &z;

  char *y[5] = {};
  y[0] = &cArray[0];
  y[1] = &cArray[5];
  y[2] = &cArray[8];
  y[3] = &cArray[11];
  y[4] = NULL;

  char **x = &y[0];
  char ***argvp = &x;

  printf("w points at %p: address of x\n", argvp);
  printf("x points at %p: address of y1\n", x);
  printf("y1 points at %p: address of cArray[0]\n", y[0]);
  printf("y2 points at %p: address of cArray[5]\n", y[1]);
  printf("y3 points at %p: address of cArray[8]\n", y[2]);
  printf("y4 points at %p: address of cArray[11]\n", y[3]);
  printf("z points at %p: address of cArray[0]\n", z);
  printf("argvp is %p: address of x\n", argvp);
  printf("address of argvp is %p\n", &argvp);
  printf("*argvp is %p: equal to x\n", *argvp);
  printf("**argvp is %p: equal to y1\n", **argvp);
  printf("***argvp is %c: value at cArray[0]\n", ***argvp);
  printf("argvp+1 is %p: equal to x\n", argvp + 1);
  printf("*(argvp+1) is %p: equal to y1\n", *(argvp + 1));
  printf("(*argvp)+1 is %p: address of y2\n", (*argvp) + 1);
  printf("*((*argvp)+1) is %p: equal to y2\n", *((*argvp) + 1));
  printf("argvp[1] is %p: equal to y1\n", argvp[1]);
  printf("(*argvp)[1] is %p: equal to y2\n", (*argvp)[1]);
  printf("*(argvp[1]) is %p: equal to ?\n", *(argvp[1]));
  printf("argvp[1][0] is %p: equal to ?\n", argvp[1][0]);

  return 0;
}