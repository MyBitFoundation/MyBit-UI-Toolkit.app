export const getPrettyCategoryName = (category) => {
  switch (category) {
    case 'bitcoinatm':
      return 'Bitcoin ATM';
    case 'cryptomining':
      return 'Crypto Mining';
    case 'realestatestorage':
      return 'Real Estate (Storage)';
    case 'realestatecoworking':
      return 'Real Estate (Co-Working)';
    case 'chargingstation':
      return 'Charging Station';
    case 'dronedelivery':
      return 'Drone Delivery';
    case 'autonomousvehicles':
      return 'Autonomous Vehicles';
    case 'solarenergy':
      return 'Energy';
    // case 'windenergy':
    //   return 'Energy';
    case 'masternodes':
      return 'Masternodes';
    case 'vendingmachines':
      return 'Vending Machines';
    default:
      return 'Other';
  }
};

export const getImageForCategory = (category) => {
  switch (category) {
    case 'bitcoinatm':
      return cryptocurrencyAtmCategoryImage;
    case 'autonomousvehicles':
      return autonomousvehiclesImage;
    case 'cryptomining':
      return cryptominingImage;
    case 'dronedelivery':
      return dronedeliveryImage;
    case 'solarenergy':
      return solarenergyImage;
    case 'realestatestorage':
      return realestatestorageImage;
    // case 'windenergy':
    //   return windenergyImage;
    case 'realestatecoworking':
      return realestatecoworkingImage;
    case 'masternodes':
      return masternodeImage;
    case 'chargingstation':
      return chargeStationImage;
    case 'vendingmachines':
      return vendingMachineImage;
    default:
      return otherImage;
  }
};
