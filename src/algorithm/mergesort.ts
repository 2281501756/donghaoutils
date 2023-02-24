export const mergesort = function (arr: number[]) {
  merge(0, arr.length - 1)
  return arr
  function merge(l: number, r: number) {
    if (l >= r) return
    let mid = (l + r) >> 1
    merge(l, mid)
    merge(mid + 1, r)
    let i = l,
      j = mid + 1,
      k = 0,
      s: number[] = []
    while (i <= mid && j <= r) {
      if (arr[i] <= arr[j]) {
        s[k++] = arr[i++]
      } else {
        s[k++] = arr[j++]
      }
    }
    while (i <= mid) s[k++] = arr[i++]
    while (j <= r) s[k++] = arr[j++]
    for (let i = l, j = 0; i <= r; i++, j++) arr[i] = s[j]
  }
}
