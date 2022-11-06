// https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1

function maxMeetings(start, end, n) {
  // code here
    let meetings = [];
    for (let i = 0; i < n; i++) {
       meetings.push([start[i],end[i]]);
    }
    meetings.sort((a,b) => a[1] - b[1]);

    let endTime = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if(meetings[i][0] > endTime){
            count+=1;
            endTime = meetings[i][1];
        }
    }
    return count
}

console.log(maxMeetings([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9], 6));