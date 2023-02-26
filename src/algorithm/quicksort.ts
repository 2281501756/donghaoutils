export const quicksort = function (arr: number[]) {
  quick(0, arr.length - 1)
  console.log(arr)
  return arr
  function quick(l: number, r: number) {
    if (l >= r) return
    let i = l - 1,
      j = r + 1,
      mid = arr[(i + j) >> 1]
    while (i < j) {
      while (arr[++i] < mid);
      while (arr[--j] > mid);
      if (i < j) swap(i, j)
    }
    quick(l, j)
    quick(j + 1, r)
  }
  function swap(i: number, j: number) {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
}
