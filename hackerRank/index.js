const apples = [ -2, 2, 1 ];
const a = 5;
const s = 7;
const t = 11;
const appDist = [];
apples.forEach((distance) => {
	appDist.push(distance + a);
});
console.log(appDist);

const appInHouse = appDist.filter((distance) => distance >= s && distance <= t);
console.log(appInHouse.length);
