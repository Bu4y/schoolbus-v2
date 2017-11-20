export class LocationModel {
    name: string;
    image: string;
    route: routeModel = new routeModel();
}
export class routeModel {
    routetype: string;
    reception: mapModel = new mapModel();
    school: mapModel = new mapModel();
    send: mapModel = new mapModel();
}
export class mapModel {
    item: string;
    lat: number;
    long: number;
    contact: string;
    tel: number;
}

export class OrderListModel {
    name: string;
    image: string;
    reception: string;
    school: string;
    send: string;
}