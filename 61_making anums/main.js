//making a list or anum for different types of vehicle
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Bus"] = 1] = "Bus";
    vehicleType[vehicleType["Truck"] = 2] = "Truck";
})(vehicleType || (vehicleType = {}));
//show one type vehicle from the list
console.log(vehicleType.Bus);
