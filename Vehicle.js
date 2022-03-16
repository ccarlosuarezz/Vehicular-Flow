class Vehicle {

    image = new Image();

    constructor(length, direction, aggressiveness) {
        this.length = length; //m
        this.height = this.setHeight()
        this.speed = this.setSpeed(); //Km/h
        this.direction = direction;//0=izquierda o 1=derecha
        this.aggressiveness = aggressiveness;
        // this.image = this.setImage();
        this.coordX = this.setCoordX();
        this.coordY = this.setCoordY();
    }

    setHeight() {
        let width = 0;
        switch (this.length) {
            case BIKE_SIZE:
                width = BIKE_HEIGHT;
                break;
            case CAR_SIZE:
                width = CAR_HEIGHT;
                break;
            case BUS_SIZE:
                width = BUS_HEIGHT;
                break;
            case TRUCK_SIZE:
                width = TRUCK_HEIGHT;
                break;
        }
        return width;
    }

    setSpeed() {
        let speed = 0;
        switch (this.length) {
            case BIKE_SIZE:
                speed = randomValue(50, 80);
                break;
            case CAR_SIZE:
                speed = randomValue(50, 80);
                break;
            case BUS_SIZE:
                speed = randomValue(40, 70);
                break;
            case TRUCK_SIZE:
                speed = randomValue(30, 60);
                break;
        }
        return speed;
    }

    setImage() {
        switch (this.length) {
            case BIKE_SIZE:
                this.direction==0? this.image.src = BIKE_L_IMG: this.image.src = BIKE_R_IMG;
                break;
            case CAR_SIZE:
                this.direction==0? this.image.src = CAR_L_IMG: this.image.src = CAR_R_IMG;
                break;
            case BUS_SIZE:
                this.direction==0? this.image.src = BUS_L_IMG: this.image.src = BUS_R_IMG;
                break;
            case TRUCK_SIZE:
                this.direction==0? this.image.src = TRUCK_L_IMG: this.image.src = TRUCK_R_IMG;
                break;
        }
    }

    setCoordX() {
        return this.direction==0? 0: WIDTH_WAY*SCALE - this.length*SCALE;
    }

    setCoordY() {
        let y = 0;
        switch (this.length) {
            case 2:
                this.direction==0? y=60: y=15;
                break;
            case 4:
                this.direction==0? y=60: y=20;
                break;
            case 7:
                this.direction==0? y=55: y=15;
                break;
            case 10:
                this.direction==0? y=52: y=12;
                break;
        }
        return y;
    }

    move() {
        console.log('Move');
        if (this.direction == 0) {
            this.coordX += Math.round(this.speed/2);
        } else {
            this.coordX -= Math.round(this.speed/2);
        }
    }

    speedUp() {

    }
}