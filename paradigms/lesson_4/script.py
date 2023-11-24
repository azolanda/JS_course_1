# Написать скрипт для расчета корреляции Пирсона между
# двумя случайными величинами (двумя массивами).

import math
import random


def find_mean_array(numbers: list[int]) -> float:
    return sum(numbers) / len(numbers)


def create_array(n: int = 10) -> list[int]:
    return [random.randint(5, 15) for _ in range(n)]


def find_pearson_correlation(x_list: list[int], y_list: list[int]) -> float:
    x_mean = find_mean_array(x_list)
    y_mean = find_mean_array(y_list)

    return sum(map(lambda xy: (xy[0] - x_mean) * (xy[1] - y_mean), zip(x_list, y_list))) / math.sqrt(
        sum(map(lambda x: (x - x_mean) ** 2, x_list)) * sum(map(lambda y: (y - y_mean) ** 2, y_list)))


def main():
    for _ in range(15):
        x_numbers = create_array()
        y_numbers = create_array()

        print(find_pearson_correlation(x_numbers, y_numbers))


if __name__ == '__main__':
    main()
