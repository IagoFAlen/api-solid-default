import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Search Gym (e2e)', () => {
	beforeAll(async () => {
		await app.ready()
	})
	
	afterAll(async () => {
		await app.close()
	})
	
	it('should be able to search a gym by title', async () => {
		const { token } = await createAndAuthenticateUser(app, true)
		
		await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
			title: 'JavaScript Gym',
			description: 'Some description.',
			phone: '11999999999',
			latitude: 0,
			longitude: 0,
		})

        await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
			title: 'TypeScript Gym',
			description: 'Some description.',
			phone: '11999999999',
			latitude: 1,
			longitude: 1,
		})
		
        const response = await request(app.server)
                                            .get('/gyms/search')
                                            .query({ q: 'JavaScript'})
                                            .set('Authorization', `Bearer ${token}`)
                                            .send()

		expect(response.statusCode).toEqual(200)
        expect(response.body.gyms).toHaveLength(1)
        expect(response.body.gyms).toEqual([
            expect.objectContaining({
                title: 'JavaScript Gym',
            })
        ])
	})
})