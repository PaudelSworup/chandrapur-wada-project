let API: string = 'http://192.168.1.67:9000/api';

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

// export const houseData = async (data: any) => {
//   try {
//     return await fetch(`${API}/road/save`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(res => {
//         return res.json();
//       })
//       .catch((err: any) => {
//         return console.log(err);
//       });
//   } catch (err) {}
// };

export const getToleByWard = async (wardId: number) => {
  try {
    const data = await fetch(`${API}/house/tole/byWard/${wardId}`);
    return data.json();
  } catch (err: any) {
    return console.log(err);
  }
};

// munTole/toleByWard/id
