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

export const loginUser =  async (payload) => {
    const data = await instance.post(`/registration/login`, payload)
    return data.data;
}

export const createUser =  async (payload) => {
    const data = await instance.post(`/registration/create`, payload)
    return data.data;
}