import test from 'ava';
import semver from 'semver';
import fn from '.';

test('Should get correct version', async t => {
	const version = await fn('bestande.bestande');
	t.is(semver.valid(version), version);
});

test('Should throw error on invalid Google Play ID', async t => {
	t.throws(fn('12345.12345'));
});
