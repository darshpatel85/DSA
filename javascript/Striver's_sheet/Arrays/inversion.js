// https://www.codingninjas.com/codestudio/problems/count-inversions_615

const merge = (arr, left, mid, right,count) => {
  let x1 = arr.slice(left, mid + 1);
  let x2 = arr.slice(mid + 1, right + 1);
  let i = 0;
  let j = 0;
  let k = left;
  while (i < x1.length && j < x2.length) {
    if (x1[i] <= x2[j]) arr[k++] = x1[i++];
    else {
       count = count + x1.slice(i).length;
        arr[k++] = x2[j++]
    };
  }
  while (i < x1.length) {
    arr[k++] = x1[i++];
  }
  while (j < x2.length) {
    arr[k++] = x2[j++];
  }
  return count;
};

const mergeSort = (arr, left, right,count=0) => {
  if (left < right) {
    let mid = Math.floor((right + left) / 2);
    count = mergeSort(arr, left, mid,count);
    count = mergeSort(arr, mid + 1, right, count);
    count = merge(arr, left, mid, right, count);
  }
  return count;
};

const getInversion = (arr) => {
    return mergeSort(arr,0,arr.length-1)
}

console.log(
  getInversion(
    "289837621 687176338 941575810 783231857 462056296 172999051 971906113 684533604 75682691 685306490 23633765 964542384 343752255 157473882 520596748 781207617 58240683 604998138 941111217 536943549 585033793 16112334 146772209 628477534 168738081 358041337 3914733 663306853 335392934 786330443"
      .split(" ")
      .map((i) => +i)
  )
);


// 52244275 123047899 493394237 922363607 378906890 188674257 222477309 902683641 860884025 339100162 16

// 36343342 658445766 281323766 703538013 437455363 900766801 84401391 159903601 626186515 127519304 222484765 609828661 190927389 152625748 358752776 522920848 494568773 977351598 782415711 966011559 71

// 289837621 687176338 941575810 783231857 462056296 172999051 971906113 684533604 75682691 685306490 23633765 964542384 343752255 157473882 520596748 781207617 58240683 604998138 941111217 536943549 585033793 16112334 146772209 628477534 168738081 358041337 3914733 663306853 335392934 786330443 250