var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var max = Math.max(...scores);
console.log("Your highest grade is ", max);
var min = Math.min(...scores);
console.log("Your lowest grade is ", min);

var gradeCount = {
	A: 0,
	B: 0,
	C: 0,
	D: 0,
	F: 0,
}

for (var i = 0; i < scores.length; i++) {
	if (50 <= scores[i] && scores[i] <= 60) {
		gradeCount.F += 1;
	} else if (61 <= scores[i] && scores[i] <= 70) {
		gradeCount.D += 1;
	}else if (71 <= scores[i] && scores[i] <= 80) {
		gradeCount.C += 1;
	}else if (81 <= scores[i] && scores[i] <= 90) {
		gradeCount.B += 1;
	}else if (91 <= scores[i] && scores[i] <= 100) {
		gradeCount.A += 1;
	}
}
console.log(gradeCount);
