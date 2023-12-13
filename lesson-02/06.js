let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};
let deepСloningPassportWithAddress = structuredClone(passportWithAddress)
deepСloningPassportWithAddress.address.city = 'Bobryisk'
console.log(passportWithAddress.address.city)
console.log(deepСloningPassportWithAddress.address.city)
