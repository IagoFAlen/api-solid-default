import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { CheckIn } from '@prisma/client'
import bcrypt from 'bcryptjs'

interface CheckInUseCaseRequest {
	userId: string
    gymId: string
}

interface CheckInUseCaseResponse {
	checkIn: CheckIn
}

export class CheckInUseCase {
	constructor(private checkInsRepository: CheckInsRepository) {}

	async execute({ userId, gymId }: CheckInUseCaseRequest): Promise<CheckInUseCaseResponse> {

        const checkIn = await this.checkInsRepository.create({ user_id: userId, gym_id: gymId })

		return {
            checkIn,
        }
	}
}