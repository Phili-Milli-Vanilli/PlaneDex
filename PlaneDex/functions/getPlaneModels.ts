import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const getPlaneModels = async () => {
    return await prisma.planeModel.findMany({
        select: {
            id: true,
            iata: true,
            icao: true,
            model: true,
            brand: true,
        },
    });
};
