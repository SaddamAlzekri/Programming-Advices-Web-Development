enum StatusCode {
    Ok = 200,
    NotFound = 404,
    ServerError = 500
}

let StutasOfError: StatusCode = StatusCode.Ok;
console.log(StutasOfError);

////////////////////////////////////////////////////

enum OrderStatus {
    pending = "PENDING",
    shipped = 'SHIPPED',
    Delivered = "DELIVERED",
    Canceled = 'CANCELED'
}

console.log(OrderStatus.Canceled);  