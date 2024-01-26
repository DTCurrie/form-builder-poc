import { AutoObject, Checkbox, Slider, Text } from 'svelte-tweakpane-ui';
import type { JSONSchema7TypeName } from 'json-schema';
import IntegerSlider from './integer-slider.svelte';
import NullControl from './null-control.svelte';

export const SCHEMA_FORM_COMPONENTS: Record<
	JSONSchema7TypeName,
	ConstructorOfATypedSvelteComponent
> = {
	string: Text,
	number: Slider,
	integer: IntegerSlider,
	boolean: Checkbox,
	object: AutoObject,
	// Use comma-separated list for arrays?
	array: Text,
	null: NullControl
};
