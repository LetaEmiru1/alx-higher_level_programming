def find_peak(list_of_integers):
    """
    Finds a peak element in an unsorted list of integers.

    Args:
        list_of_integers (List[int]): The input list of integers.

    Returns:
        int: The index of a peak element, or None if the list is empty.

    Complexity:
        Time: O(log(n)) using binary search.
        Space: O(1) (constant space).

    Note: There may be more than one peak in the list.
    """
    n = len(list_of_integers)
    if n == 0:
        return None

    left, right = 0, n - 1
    while left < right:
        mid = left + (right - left) // 2
        if list_of_integers[mid] > list_of_integers[mid + 1]:
            right = mid
        else:
            left = mid + 1

    return left

