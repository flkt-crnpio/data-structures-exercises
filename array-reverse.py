# Given an array, 'A', of 'N' integers, print each element in reverse order as a single line of space-separated integers

def reverseArray(a):
    return a[::-1]

arr = [1,2,5,3]
res = reverseArray(arr)
print(' '.join(map(str, res)))
