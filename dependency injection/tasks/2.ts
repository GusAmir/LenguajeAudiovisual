class BikeDelivery {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class PackageService {
    deliveryMethod: BikeDelivery;

    constructor() {
        this.deliveryMethod = new BikeDelivery();
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}

//---------------------------------------------------------

interface DeliveryMethod {
    deliverPackage(packageId: string, address: string): void;
}

class BikeDelivery implements DeliveryMethod {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class CarDelivery implements DeliveryMethod {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a car.`);
    }
}

class PackageService {
    deliveryMethod: DeliveryMethod;

    constructor(deliveryMethod: DeliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}

const bikeDelivery = new BikeDelivery();
const packageServiceBike = new PackageService(bikeDelivery);
packageServiceBike.sendPackage("123", "123 Street, City");

const carDelivery = new CarDelivery();
const packageServiceCar = new PackageService(carDelivery);
packageServiceCar.sendPackage("456", "456 Avenue, Town");

