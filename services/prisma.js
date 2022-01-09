import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()


export const createUserIfNotExists = async (tokenSub) => {
    const userExists = await prismaClient.users.findUnique({
        where: {
            user_id: tokenSub
        }
    })

    if (!userExists) await prismaClient.users.create({data: {user_id: tokenSub}})
}

export const addCocktailToUser = async (tokenSub, idCocktail) => {

    const result = await prismaClient.cocktails.create({
        data: {
            user_id: tokenSub, 
            cocktail_id: idCocktail
        }
    })

    return result
}

export const getMyCocktails = async (tokenSub) => {
    const result = await prismaClient.cocktails.findMany({
        where: {
            user_id: tokenSub
        }, 
        select: {
            cocktail_id: true
        }
    })

    return result
}
