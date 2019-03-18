/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
length = [preferences.length]; 
count = 0; 
  for (i = 0; i<length; i++) { 
    Spichonee1 = preferences[i] - 1; 
    if (Spichonee1 == i) continue; 
    Spichonee2 = preferences[Spichonee1] - 1; 
    if (Spichonee1 == Spichonee2) continue; 
    Spichonee3 = preferences[Spichonee2] - 1; 
    if (Spichonee3 == Spichonee2) continue; 
    if (Spichonee3 == i) 
    count++; 
  } 
  return count / 3; 
}

