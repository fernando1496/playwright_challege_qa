import { currentTimestamp } from '../utils/generalFunctions';
import { User } from '../utils/types';

export function buildFakeUser(): User {
	const randomString: string = currentTimestamp().toString();
	return {
		email: 'test_user' + randomString + '@test.com',
		password: 'test_pwd',
		roles: ['ROLE_ADMIN'],
	};
}
