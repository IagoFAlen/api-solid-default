import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository"
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gym-repository"
import { CheckInUseCase } from "../check-in"


export function makeCreateCheckInUseCase(){
	const checkInsRepository = new PrismaCheckInsRepository()
    const gymsRepository = new PrismaGymsRepository()
	const useCase = new  CheckInUseCase(checkInsRepository, gymsRepository)
	
	return useCase
}