def find_peak(list_of_integers):
  """
  Finds a peak element in an unsorted list of integers.

  Args:
      list_of_integers: A list of integers.

  Returns:
      The index of a peak element in the list, or None if no peak is found.
  """
  if not list_of_integers:
      return None  # Empty list has no peak

  def find_peak_helper(start, end):
    """
    Helper function to find a peak using binary search.

    Args:
        start: The starting index of the sublist.
        end: The ending index (exclusive) of the sublist.

    Returns:
        The index of a peak element in the sublist, or None if no peak is found.
    """
    if start == end - 1:
      return start if list_of_integers[start] > list_of_integers[end] else end
    mid = start + (end - start) // 2
    if list_of_integers[mid] > list_of_integers[mid - 1] and list_of_integers[mid] > list_of_integers[mid + 1]:
      return mid
    elif list_of_integers[mid] < list_of_integers[mid - 1]:
      return find_peak_helper(start, mid)
    else:
      return find_peak_helper(mid + 1, end)

  return find_peak_helper(0, len(list_of_integers))

