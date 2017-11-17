export class LocationModel {
    name: string;
    image: string;
    route: routeModel;
}
export class routeModel {
    routetype: String;
    contact: String;
    tel: Number;
    reception: mapModel;
    school: mapModel;
    send: mapModel;
}
export class mapModel {
    item: String;
    lat: Number;
    long: Number;
}