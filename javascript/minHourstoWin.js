// https://leetcode.com/contest/weekly-contest-307/problems/minimum-hours-of-training-to-win-a-competition/

/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let requiredEnergy = 0;
  requiredEnergy = energy[energy.length - 1] + 1;
  for (let index = energy.length - 2; index >= 0; index--) {
    requiredEnergy += energy[index];
  }
  requiredEnergy -= initialEnergy;
  requiredEnergy = requiredEnergy > 0 ? requiredEnergy : 0;
  let requiredExp = initialExperience;
  let diff = 0;
  for (let index = 0; index < experience.length; index++) {
    if (requiredExp > experience[index]) requiredExp += experience[index];
    else {
      diff += experience[index] - requiredExp + 1;
      requiredExp += 2 * experience[index] - requiredExp+1;
    }
  }
  return diff+requiredEnergy
};
