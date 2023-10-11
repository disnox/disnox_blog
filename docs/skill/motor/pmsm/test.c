#include "stdio.h"

#include <stdio.h>

int main(void) 
{
    int n;
    double e = 1.0;
    double factorial = 1.0;

    printf("Enter (n): ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) 
    {
        factorial *= i; // 计算i的阶乘
        e += 1.0 / factorial; // 更新e的值
    }

    printf("n: %d e: %lf\n", n, e);

    return 0;
}