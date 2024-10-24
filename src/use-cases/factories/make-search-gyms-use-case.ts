import { SearchGymsUseCase } from "../search-gyms"
import { ValidateCheckInUseCase } from "../validate-check-in"
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gym-repository"


export function makeSearchGymsUseCase(){
	const gymsRepository = new PrismaGymsRepository()
	const useCase = new SearchGymsUseCase(gymsRepository)
	
	return useCase
}