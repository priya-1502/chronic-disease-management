import getInstance from "./instance";

const instance = getInstance();

export const userAPi = async () => {
    const data = await instance.get();
    console.log(data);
    return data;
}

export const getUser =  async (id) => {
    const data = await instance.get(`/registration/${id}`)
    return data.data;
}