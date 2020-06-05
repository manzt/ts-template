import { getFoo } from '../src';

test('It works!', () => {
	const { bar } = getFoo();
	expect(bar).toEqual('bar');
});
