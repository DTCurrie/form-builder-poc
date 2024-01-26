import type { JSONSchema7TypeName, JSONSchema7Type } from 'json-schema';

export const SCHEMA_FORM_DEFAULTS: Record<JSONSchema7TypeName, JSONSchema7Type> = {
	string: '',
	number: 0,
	integer: 0,
	boolean: false,
	object: {},
	array: '',
	null: null
};
