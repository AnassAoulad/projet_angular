export const environment = {
	production: false,
	firebaseConfig: {
		apiKey: process.env['apiKei'],
		authDomain: process.env['authDomain'],
		projectId: process.env['projectId'],
		storageBucket: process.env['storageBucket'],
		messagingSenderId: process.env['messagingSenderId'],
		appId: process.env['appId']
	}
}
