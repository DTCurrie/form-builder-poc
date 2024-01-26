<script lang="ts">
	import { Slider } from 'svelte-tweakpane-ui';
	export let value: number;
</script>

<Slider bind:value step={1} {...$$restProps} />
