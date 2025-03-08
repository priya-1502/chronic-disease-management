import instance from "./instance";

export const userAPi = async () => {
    const data = await instance.get();
    console.log(data);
    return data;
}

export const user =  async (id) => {
    const data = await instance.get("/id")
    return data;
}