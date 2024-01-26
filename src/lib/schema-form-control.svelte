<script lang="ts">
	import type { JSONSchema7Type, JSONSchema7TypeName } from 'json-schema';
	import { SCHEMA_FORM_COMPONENTS } from './schema-form-components';
	import { SCHEMA_FORM_DEFAULTS } from './schema-form-defaults';
	import { Folder } from 'svelte-tweakpane-ui';

	export let label: string;
	export let type: JSONSchema7TypeName;

	let value: JSONSchema7Type = SCHEMA_FORM_DEFAULTS[type];
	let expanded = false;

	$: component = SCHEMA_FORM_COMPONENTS[type];
</script>

{#if type === 'object'}
	<Folder bind:expanded title={label}>
		<svelte:component this={component} bind:object={value} />
	</Folder>
{:else}
	<svelte:component this={component} bind:value {label} />
{/if}
