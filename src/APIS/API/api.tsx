// let API: string = 'http://192.168.31.20:9000/api';
// let API: string = 'http://192.168.18.52:9000/api';
// let API: string = 'http://api';
let API: string = 'http://43.204.1.138:9000/api';
let API2: string = 'http://192.168.1.67:9000/api';
export const IMAGE_URL = 'http://43.204.1.138:9000';

//get the house type
export const getHouseType = async () => {
  try {
    const data = await fetch(`${API}/house/type`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

//get house category
export const getHouseCategory = async () => {
  try {
    const data = await fetch(`${API}/house/category`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

//get the data
export const getMunWard = async () => {
  try {
    const data = await fetch(`${API}/house/ward`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const addHouseData = async (data: any) => {
  try {
    return await fetch(`${API}/house/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        return res.json();
      })
      .catch((err: any) => {
        return console.log(err);
      });
  } catch (err) {}
};

export const getToleByWard = async (wardId: number) => {
  try {
    const data = await fetch(`${API}/house/tole/byWard/${wardId}`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const addFamilyData = async (data: any) => {
  try {
    return await fetch(`${API}/family/all/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        return res.json();
      })
      .catch((err: any) => {
        return console.log(err);
      });
  } catch (err) {}
};

export const signUp = async (data: any) => {
  try {
    return await fetch(`${API}/auth/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        return res.json();
      })
      .catch((err: any) => {
        return console.log(err);
      });
  } catch (err) {}
};

export const signIn = async (data: any) => {
  try {
    return await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        return res.json();
      })
      .catch((err: any) => {
        return console.log(err);
      });
  } catch (err) {}
};

export const languageDropDown = async () => {
  try {
    const data = await fetch(`${API}/languages`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const casteDropDown = async () => {
  try {
    const data = await fetch(`${API}/caste`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const religionDropDown = async () => {
  try {
    const data = await fetch(`${API}/religion`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const districtsDropDown = async () => {
  try {
    const data = await fetch(`${API}/district`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const disabilityDropDown = async () => {
  try {
    const data = await fetch(`${API}/disable`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const ltdDropDown = async () => {
  try {
    const data = await fetch(`${API}/ltdtype`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const bathroomDropDown = async () => {
  try {
    const data = await fetch(`${API}/bathroom`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const toiletDropDown = async () => {
  try {
    const data = await fetch(`${API}/toilet`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const waterDropDown = async () => {
  try {
    const data = await fetch(`${API}/water`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const waterTypeDropDown = async () => {
  try {
    const data = await fetch(`${API}/water/source`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const electricityDropDown = async () => {
  try {
    const data = await fetch(`${API}/electricity`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const transportDropDown = async () => {
  try {
    const data = await fetch(`${API}/transport`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const agricultureDropDown = async () => {
  try {
    const data = await fetch(`${API}/agriculture`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const wasteMgmtDropDown = async () => {
  try {
    const data = await fetch(`${API}/waste`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const toiletTypeDropDown = async () => {
  try {
    const data = await fetch(`${API}/toilet/type`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const cookingSourceDropDown = async () => {
  try {
    const data = await fetch(`${API}/cookingsource`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const healthDropDown = async () => {
  try {
    const data = await fetch(`${API}/health`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const internetDropDown = async () => {
  try {
    const data = await fetch(`${API}/internet`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const educationDropDown = async () => {
  try {
    const data = await fetch(`${API}/educationservice`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const publicVehicleDropDown = async () => {
  try {
    const data = await fetch(`${API}/publicvehicle`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const privateVehicleDropDown = async () => {
  try {
    const data = await fetch(`${API}/privatevehicle`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const vehicleTypeDropDown = async () => {
  try {
    const data = await fetch(`${API}/vehicle/type`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const incomeTypeDropDown = async () => {
  try {
    const data = await fetch(`${API}/income/type`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const genderDropDown = async () => {
  try {
    const data = await fetch(`${API}/gender`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const rentDropDown = async () => {
  try {
    const data = await fetch(`${API}/rent`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const getAllFamilyData = async (id: number) => {
  try {
    const data = await fetch(`${API}/family/${id}`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const getAllFamilyAll = async () => {
  try {
    const data = await fetch(`${API}/family/all`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const getHouseData = async (page: number) => {
  try {
    const data = await fetch(`${API}/house/new/${page}`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const uplaodImage = async (data: any, id: number) => {
  try {
    return await fetch(`${API}/profile/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    }).then(res => {
      return res.json();
    });
  } catch (err) {
    return console.log(err);
  }
};

export const houseDetail = async (id: number) => {
  try {
    const data = await fetch(`${API}/house/detail/${id}`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const paribarDetail = async (id: number) => {
  try {
    const data = await fetch(`${API}/family/detail/${id}`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const addRoadDetail = async (data: any) => {
  try {
    return await fetch(`${API}/road/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      return res.json();
    });
  } catch (err) {
    return console.log(err);
  }
};

export const getRoadData = async (page: number) => {
  try {
    const data = await fetch(`${API}/road/${page}`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

export const getRoadDetail = async (id: number) => {
  try {
    const data = await fetch(`${API}/road/detail/${id}`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};
