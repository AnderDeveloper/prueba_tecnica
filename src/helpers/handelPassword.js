import bcryptjs from 'bcryptjs'


export const encrypt = async (passwordPLain)=>{
    const hash = await bcryptjs.hash(passwordPLain, 10)
    return hash

}

export const compare = async (passwordPLain, hashPassword)=>{
    return await bcryptjs.compare(passwordPLain, hashPassword)
}

