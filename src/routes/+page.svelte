<script lang="ts">
	import type { JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema';
	import SchemaFormControl from '$lib/schema-form-control.svelte';
	import schemas from './schemas.json';

	type SchemaKey = keyof typeof schemas;

	const getDefinitions = (key: SchemaKey) => schemas[key].$defs;

	const getType = (property: JSONSchema7Definition): JSONSchema7TypeName => {
		if (typeof property === 'boolean') {
			return 'null';
		}

		if (property.type === undefined) {
			return 'null';
		}

		if (Array.isArray(property.type)) {
			return property.type[0];
		}

		return property.type;
	};
</script>

<h1>Form Builder</h1>
<p>
	See <a href="https://github.com/kitschpatrol/svelte-tweakpane-ui">svelte-tweakpane-ui</a> to read the
	documentation.
</p>

{#each Object.keys(schemas) as schema}
	<h2>{schema}</h2>
	{@const definition = getDefinitions(schema)}
	{#each Object.keys(definition) as field}
		<fieldset>
			<legend>{field}</legend>
			{#each Object.keys(definition[field].properties ?? {}) as label}
				<SchemaFormControl {label} type={getType(definition[field].properties[label])} />
			{/each}
		</fieldset>
	{/each}
{/each}
