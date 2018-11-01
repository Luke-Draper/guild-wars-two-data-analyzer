import DummyClass from './guild-wars-two-data-analyzer'
/**
 * Dummy test
 */
describe('Dummy test', () => {
	it('works if true is truthy', () => {
		expect(true).toBeTruthy()
	})

	it('DummyClass is instantiable', () => {
		console.log('hi')
		expect(new DummyClass()).toBeInstanceOf(DummyClass)
	})
	test('XHR happens', async () => {
		expect.assertions(1)
		const dummy = new DummyClass()
		const output = await dummy.countBreeds()
		await expect(output).toBe('87')
	})
})
