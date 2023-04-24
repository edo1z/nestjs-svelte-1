<script lang="ts">
	import LayoutAuth from '$lib/components/layouts/LayoutAuth.svelte';
</script>

<LayoutAuth>
	<div class="card p-4 mt-10">
		<form>
			<h2 class="mb-10">Sign Up</h2>
			<label class="label">
				<span>Email</span>
				<input class="input" type="text" placeholder="" name="email" />
			</label>
			<button type="button" class="btn variant-filled mt-5">Sign In</button>
		</form>
	</div>
</LayoutAuth>
