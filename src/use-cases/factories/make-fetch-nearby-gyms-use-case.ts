import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms"
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gym-repository"


export function makeFetchNearbyGymsUseCase(){
	const gymsRepository = new PrismaGymsRepository()
	const useCase = new FetchNearbyGymsUseCase(gymsRepository)
	
	return useCase
}