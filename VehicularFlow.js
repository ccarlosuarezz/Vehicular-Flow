const way = document.getElementById('way');
let context = way.getContext('2d');

way.width = WIDTH_WAY*SCALE;
way.height = HEIGHT_WAY*SCALE;

let vehicleList = [];
let intervalTrafic;


function simulation() {
    drawGuides();
    intervalTrafic = setInterval(() => {
        context.clearRect(0, 0, way.width, way.height);
        drawGuides();
        createVehicles();
        drawVehicles();
        validateEndOfTrip();
    }, 100);
}

function createVehicles() {
    let randomTrafic = randomValue(0, 100);
    if (randomTrafic < 10) {
        let vehicleSize = VEHICLE_SIZE_LIST[randomValue(0, VEHICLE_SIZE_LIST.length)];
        let newVehicle = new Vehicle(vehicleSize, randomValue(0,1), randomValue(0,1));
        newVehicle.setImage();
        vehicleList.push(newVehicle);
    }
}

function randomValue(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function drawVehicles() {
    for (let i = 0; i < vehicleList.length; i++) {
        drawVehicle(vehicleList[i]);
    }
}

function drawVehicle(vehicle) {
    vehicle.setImage();
    vehicle.image.onload = () => {
        context.drawImage(vehicle.image, vehicle.coordX, vehicle.coordY, vehicle.length*SCALE, vehicle.height);
        vehicle.move();
    }
}
    
function drawGuides() {
    let widthLine = 20;
    drawWayGuide(0, way.width, way.height/10);
    for (let i = 0; i < WIDTH_WAY/5; i++) {
        drawWayGuide((way.width/20)*i+15, (way.width/20)*i+15+widthLine, way.height/2);
    }
    drawWayGuide(0, way.width, way.height-(way.height/10));

}

function drawWayGuide(initX, endX, y) {
    context.beginPath();
    context.strokeStyle = YELLOW_COLOR;
    context.lineWidth = 3;
    context.moveTo(initX, y);
    context.lineTo(endX, y);
    context.stroke();
    context.closePath();
}

function validateEndOfTrip() {
    for (let i = 0; i < vehicleList.length; i++) {
        if (vehicleList[i].coordX > way.width || vehicleList[i].coordX < 0-vehicleList[i].length*SCALE) {
            vehicleList.splice(i, 1);
        }
    }
}

simulation();