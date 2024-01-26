<script lang="ts">
	import type { JSONSchema7, JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema';
	import SchemaFormControl from '$lib/schema-form-control.svelte';
	import schemas from './schemas.json';
	import { keys } from 'svelte-tweakpane-ui/ThemeUtils.js';

	type Key = keyof typeof schemas;
	const components = Object.keys(schemas) as Key[];
	const definitions = components.map((component) => ({
		...schemas[component as Key].$defs,
		component
	}));

	const getDefinitions = (component: Key) => schemas[component].$defs;

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

{#each components as component}
	<h2>{component}</h2>
	{@const definition = getDefinitions(component)}
	{#each Object.keys(definition) as field}
		<fieldset>
			<legend>{field}</legend>
			{#each Object.keys(definition[field].properties ?? {}) as label}
				<SchemaFormControl {label} type={getType(definition[field].properties[label])} />
			{/each}
		</fieldset>
	{/each}
{/each}
