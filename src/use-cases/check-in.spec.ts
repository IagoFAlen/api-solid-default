import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { CheckInUseCase } from './check-in'
import bcrypt from 'bcryptjs'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

let checkInsRepository: InMemoryCheckInsRepository
let sut: CheckInUseCase

describe('CheckIn Use Case', () => {
	beforeEach(() => {
		checkInsRepository = new InMemoryCheckInsRepository()
		sut = new CheckInUseCase(checkInsRepository)
	})

	it('should be able to check in', async () => {

		const { checkIn } = await sut.execute({
			gymId: 'gym-01',
			userId: 'user-01',
		})
		
		expect(checkIn.id).toEqual(expect.any(String))
	})
})